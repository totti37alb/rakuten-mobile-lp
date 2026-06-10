@echo off
cd /d "%~dp0"
del /f ".git\index.lock" 2>nul
git add -A
git commit -m "auto: サムネイル追加 2026-06-08"
git push origin main
git log --oneline -3 > git-last-result.txt
echo Done.
pause
