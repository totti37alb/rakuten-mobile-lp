@echo off
cd /d "%~dp0"
del /f /q ".git\index.lock" 2>nul
del /f /q ".git\HEAD.lock" 2>nul
git add -A
git commit -m "auto: kiji tsuika 2026-06-19"
git push origin main > auto-push-out.txt 2>&1
git log --oneline -3 >> auto-push-out.txt 2>&1
echo DONE >> auto-push-out.txt
