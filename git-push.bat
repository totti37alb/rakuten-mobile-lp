@echo off
cd /d "%~dp0"
if exist .git\index.lock del /f .git\index.lock
if exist .git\HEAD.lock del /f .git\HEAD.lock
git add -A
git commit -m "auto: kiji tsuika 2026-08-15"
git push origin main
git log --oneline -3 > git-last-result.txt
