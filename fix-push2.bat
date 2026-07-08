@echo off
cd /d "%~dp0"
git push --force-with-lease origin main
git log --oneline -3 > git-last-result.txt
echo.
echo ===== push done =====
pause
