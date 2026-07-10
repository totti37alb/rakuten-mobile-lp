@echo off
cd /d "%~dp0"
del /f /q ".git\index.lock" 2>nul
del /f /q ".git\HEAD.lock" 2>nul
del /f /q ".git\refs\heads\main.lock" 2>nul
del /f /q ".git\objects\maintenance.lock*" 2>nul
echo === dir check === > auto-push-out-0710.txt
dir /b content\articles\2026-07-10-*.md >> auto-push-out-0710.txt 2>&1
echo === status === >> auto-push-out-0710.txt
git status --short >> auto-push-out-0710.txt 2>&1
echo === add === >> auto-push-out-0710.txt
git add -A >> auto-push-out-0710.txt 2>&1
echo === commit === >> auto-push-out-0710.txt
git commit -m "auto: kiji tsuika 2026-07-10" >> auto-push-out-0710.txt 2>&1
echo === push === >> auto-push-out-0710.txt
git push origin main >> auto-push-out-0710.txt 2>&1
echo === log === >> auto-push-out-0710.txt
git log --oneline -3 >> auto-push-out-0710.txt 2>&1
echo DONE >> auto-push-out-0710.txt
