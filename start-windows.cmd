@echo off
setlocal
pushd "%~dp0" || exit /b 1
py -3 -c "import sys; sys.exit(0 if sys.version_info >= (3,8) else 1)" >nul 2>&1
if not errorlevel 1 goto use_py
python -c "import sys; sys.exit(0 if sys.version_info >= (3,8) else 1)" >nul 2>&1
if not errorlevel 1 goto use_python
node --version >nul 2>&1
if not errorlevel 1 goto use_node
echo Please install Python 3 or Node.js 22.12+ and run this file again.
echo Python: https://www.python.org/downloads/
echo Node.js: https://nodejs.org/
goto done
:use_py
py -3 scripts\serve.py %*
goto done
:use_python
python scripts\serve.py %*
goto done
:use_node
node scripts\start.mjs %*
:done
popd
pause
