@echo off
setlocal
pushd "%~dp0" || exit /b 1
if "%~1"=="" goto no_files
py -3 -c "import sys; sys.exit(0 if sys.version_info >= (3,8) else 1)" >nul 2>&1
if not errorlevel 1 goto use_py
python -c "import sys; sys.exit(0 if sys.version_info >= (3,8) else 1)" >nul 2>&1
if not errorlevel 1 goto use_python
echo [ERROR] Python 3.8 or newer is required.
echo Download: https://www.python.org/downloads/
goto done
:use_py
py -3 scripts\import-mmd.py %*
goto done
:use_python
python scripts\import-mmd.py %*
goto done
:no_files
echo Drag one or more original model ZIP files onto this CMD file.
echo See MODEL_IMPORT_GUIDE.zh-CN.md for detailed Chinese instructions.
:done
popd
pause
