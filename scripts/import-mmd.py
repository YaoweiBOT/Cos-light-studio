"""Import the three supported, user-owned PMX ZIPs without changing their files."""
import hashlib
import json
from pathlib import Path, PurePosixPath
import shutil
import stat
import sys
import tempfile
import zipfile

ROOT = Path(__file__).resolve().parent.parent
CHARACTERS = {"仪玄.pmx": "yixuan", "耀嘉音.pmx": "jiayin", "维琳娜6.pmx": "velina"}


def decoded(info):
    name = info.filename
    if not info.flag_bits & 0x800:
        try:
            name = name.encode("cp437").decode("gb18030")
        except (UnicodeError, LookupError):
            pass
    return PurePosixPath(name.replace("\\", "/"))


def source_digest():
    files = [p for folder in ("src", "assets") for p in (ROOT / folder).rglob("*") if p.is_file()]
    files += [ROOT / n for n in ("package.json", "package-lock.json", "scripts/build.mjs", "LICENSE", "THIRD_PARTY_NOTICES.md") if (ROOT / n).exists()]
    h = hashlib.sha256()
    for p in sorted(files, key=lambda p: p.relative_to(ROOT).as_posix()):
        h.update(p.relative_to(ROOT).as_posix().encode("utf-8"))
        h.update(p.read_bytes())
    return h.hexdigest()


def import_zip(file):
    with zipfile.ZipFile(file) as z:
        entries = [(i, decoded(i)) for i in z.infolist()]
        if len(entries) > 1000 or sum(i.file_size for i, _ in entries) > 300 * 1024 * 1024:
            raise ValueError("模型包过大或条目过多")
        models = [(p, CHARACTERS[p.name]) for i, p in entries if p.name in CHARACTERS]
        if len(models) != 1:
            raise ValueError("每包应有一个已适配的主模型：仪玄.pmx、耀嘉音.pmx 或 维琳娜6.pmx")
        main, character = models[0]
        with tempfile.TemporaryDirectory(prefix="cos-mmd-") as temporary:
            stage = Path(temporary)
            for info, path in entries:
                if path.is_absolute() or ".." in path.parts or any(":" in p for p in path.parts):
                    raise ValueError("不安全的模型文件路径")
                if stat.S_ISLNK(info.external_attr >> 16):
                    raise ValueError("模型包不能包含符号链接")
                try:
                    relative = path.relative_to(main.parent)
                except ValueError:
                    continue
                if info.is_dir():
                    continue
                target = stage / str(relative)
                target.parent.mkdir(parents=True, exist_ok=True)
                with z.open(info) as source, target.open("wb") as output:
                    shutil.copyfileobj(source, output)
            for base in (ROOT / "assets/MMD", ROOT / "dist/models/MMD"):
                shutil.copytree(stage, base / character, dirs_exist_ok=True)
        print("已导入", character, "；原作者说明和贴图已保留。")


def main():
    if len(sys.argv) < 2:
        raise ValueError('用法：python scripts/import-mmd.py "模型包.zip" ["另一个模型包.zip"]')
    manifest_path = ROOT / "dist/build-manifest.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8")) if manifest_path.exists() else None
    # Only update the build fingerprint when the existing build was current.
    # Never hide unrelated source edits behind an asset import.
    was_current = manifest is not None and manifest.get("sourceDigest") == source_digest()
    for name in sys.argv[1:]:
        import_zip(Path(name))
    if was_current:
        manifest["sourceDigest"] = source_digest()
        manifest["hasMMD"] = True
        manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("完成。启动本地版后在 场景 → 人物 切换。素材仍受原作者条款约束。")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print("导入失败：", e, file=sys.stderr)
        sys.exit(1)
