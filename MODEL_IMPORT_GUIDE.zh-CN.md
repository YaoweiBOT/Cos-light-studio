# 三个 MMD 模型的本地使用说明

这份说明适用于 Cos Light Studio 0.5。公开的源码包不包含仪玄、耀嘉音和维琳娜的模型文件；你需要用自己合法取得的原始 ZIP，在自己的电脑上导入。

导入后，模型只存在于你的本地文件夹。请勿把导入后的目录、个人完整版 ZIP、PMX、贴图或材质上传到 GitHub、网盘、群文件或 Release。

## 一、准备文件

准备以下两个内容：

1. `cos-light-studio-source-v0.5.0.zip`
2. 你自己取得的一个或多个原模型 ZIP。当前版本只识别以下主文件：

| 角色 | ZIP 内必须存在的主模型 | 导入后的内部目录 |
| --- | --- | --- |
| 仪玄「墨形影踪」 | `仪玄.pmx` | `yixuan` |
| 耀嘉音「水晶灯下」 | `耀嘉音.pmx` | `jiayin` |
| 维琳娜 | `维琳娜6.pmx` | `velina` |

不要先删除 ZIP 里的贴图、材质文件、toon、spa 或说明文件。仅有 `.pmx` 不能正确显示人物。

## 二、Windows 推荐导入方法

1. 完整解压 `cos-light-studio-source-v0.5.0.zip`。
2. 打开解压后的 `cos-light-studio-local` 文件夹。
3. 把需要导入的原模型 ZIP 拖到 `import-models-windows.cmd` 上。可以一次选中三个 ZIP，一起拖过去。
4. 黑色窗口逐个显示“已导入 yixuan／jiayin／velina”后，按任意键关闭。
5. 双击 `start-windows.cmd` 启动程序。
6. 在浏览器打开“场景 → 人物”，选择角色。程序第一次读取 PMX 和贴图时会稍慢。

导入脚本不会修改原 ZIP。它会检查压缩包路径，保留原来的文件夹结构和使用说明，并把模型复制到程序运行及源码构建所需的位置。

如果拖放没有反应，先确认 Windows 已安装 Python 3.8 或更高版本。也可以在程序文件夹的地址栏输入 `powershell`，回车后运行：

```powershell
python scripts/import-mmd.py `
  "D:\模型\仪玄模型包.zip" `
  "D:\模型\耀嘉音模型包.zip" `
  "D:\模型\维琳娜模型包.zip"
```

路径必须换成你电脑上的真实位置。路径含空格或中文时保留双引号。如果电脑上的命令是 `py`，把开头的 `python` 改成 `py -3`。

## 三、macOS 与 Linux

打开终端，进入解压后的 `cos-light-studio-local` 目录：

```sh
python3 scripts/import-mmd.py \
  "/你的路径/仪玄模型包.zip" \
  "/你的路径/耀嘉音模型包.zip" \
  "/你的路径/维琳娜模型包.zip"
```

然后运行：

```sh
sh start-macos.command
# Linux 使用：sh start-linux.sh
```

## 四、完全手动复制

推荐使用导入脚本。确实需要手动复制时，先完整解压模型 ZIP，再建立下面的结构：

```text
cos-light-studio-local/
├─ assets/
│  └─ MMD/
│     ├─ yixuan/    ← 里面直接放 仪玄.pmx、tex、spa、readme 等
│     ├─ jiayin/    ← 里面直接放 耀嘉音.pmx、tex、spa、readme 等
│     └─ velina/    ← 里面直接放 维琳娜6.pmx、Texture、readme 等
└─ dist/
   └─ models/
      └─ MMD/
         ├─ yixuan/ ← 与 assets/MMD/yixuan 内容一致
         ├─ jiayin/ ← 与 assets/MMD/jiayin 内容一致
         └─ velina/ ← 与 assets/MMD/velina 内容一致
```

注意以下细节：

- PMX 必须直接位于对应角色目录，不要多套一层同名文件夹。
- 保留 `tex`／`Texture` 的大小写和内部层级。
- 不要重命名 PNG、BMP、SPA、toon 或 PMX。
- 两处目录都要复制。`dist/models/MMD` 用于立即运行；`assets/MMD` 用于下次重新构建。
- 手动复制后开发者应运行 `npm run build`。普通用户直接用导入脚本更稳妥。

## 五、在程序里使用

1. 双击 `start-windows.cmd`，不要直接双击 `dist/index.html`。
2. 使用桌面 Chrome 或 Edge，并开启“可用时使用图形加速”。
3. 进入“场景 → 人物”切换仪玄、耀嘉音或维琳娜。
4. 摄影机画面下方的“头部／半身／全身”只调整相机取景；完整人物仍参与遮挡和反射。
5. “拍照姿势”可选择自然站立、叉腰、招手、双手靠脸、错步、坐梯或坐凳。
6. 点击“拖动手脚 · 自定义姿势”，在正面或侧面骨架图中拖动手腕和脚踝。
7. 先用“原始站姿 · 检查模型”，表面选“原始配色”，渲染选“原色检查 · 无光照”，确认贴图正常。再切回“物理布光 · 路径追踪”练灯。
8. 0.5 可在摄影机画面打开关节节点，调整头、手脚、手掌及手指；操作表与从旧目录升级步骤见 `UPDATE_GUIDE.zh-CN.md`。

当前姿势系统使用原 PMX 骨骼，但没有完整 MMD 物理。裙摆、长发和宽袖可能在大动作时穿插；这时减小动作幅度，或回到原始站姿。人物材质保留原贴图配色，并改用摄影棚灯光照明；未复现 MMD 的 Toon／SPA 特效，所以与 MMD 软件里的最终画面会有差异。

## 六、常见问题

### 场景里只有 Lee，选择人物时报模型缺失

原模型尚未导入，或者文件夹多套了一层。检查是否存在：

```text
dist/models/MMD/yixuan/仪玄.pmx
dist/models/MMD/jiayin/耀嘉音.pmx
dist/models/MMD/velina/维琳娜6.pmx
```

### 人物变白、贴图缺失或头发异常

先确认左上角是 LOCAL 0.5，并按 Ctrl+Shift+R 强制刷新。0.4 曾有网格合并丢失材质分区的错误，会使头发、服装错误使用脸部贴图；0.5 已修复该代码问题。

如果提示文件缺失，再检查是否只复制了 PMX 或破坏了 `tex`／`Texture` 路径。重新用原 ZIP 执行导入脚本，不要手工挑选文件。

### 浏览器提示没有 WebGL 2

打开 Chrome／Edge 的图形加速，重启浏览器并更新显卡驱动。模型导入成功与显卡渲染可用是两件事。

### 修改灯位后画面暂时有噪点

路径追踪会重新积累采样。先用“快速练习”和较低采样数摆灯，确定方案后再切换“精细”。

### 导入脚本提示主模型不匹配

当前脚本只适配上表三个准确文件名。不要为了绕过检查随意改 PMX 名称；模型内部骨骼、材质或贴图布局不同也可能无法正确使用。

## 七、避免把模型传到 GitHub

三个模型附带的原说明都写有“请勿二次配布”。应用的 MIT 许可证只覆盖程序代码，不覆盖角色模型、贴图或材质。

本项目已经在 `.gitignore` 中排除：

```text
assets/MMD/
dist/models/MMD/
*.pmx
*.pmd
*.vmd
cos-light-studio-personal-*.zip
```

提交前，在项目根目录运行：

```powershell
git status --ignored --short
git ls-files | findstr /I /R "assets/MMD dist/models/MMD \.pmx$ \.pmd$ \.vmd$ personal-v"
```

第一条命令中，本地模型目录应显示为 `!!`，表示已忽略。第二条命令应该没有任何输出；如果出现文件，说明这些素材已经被 Git 跟踪，先停止提交并将它们从 Git 索引移除。

不要使用 `git add -f` 强制加入模型目录，也不要把 `cos-light-studio-personal-v0.5.0.zip` 作为 GitHub Release 附件。

本项目的 `npm run package` 只生成可公开的 source 包，并在打包时再次排除两处 MMD 目录。只有 `npm run package -- --personal` 才生成含本地模型的个人包；个人包只保存在自己电脑上。

如果需要与共创者协作，让对方分别从合法来源取得原模型 ZIP，并在自己的电脑上运行同一个导入脚本。不要通过 Git、Release、网盘或聊天附件把你的模型文件传给对方。
