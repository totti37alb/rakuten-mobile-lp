@echo off
cd /d "%~dp0"
del /f .git\index.lock .git\HEAD.lock .git\refs\heads\main.lock 2>nul
git push origin main
git log --oneline -3 > git-last-result.txt
echo.
echo push done. Enter to close.
pause
