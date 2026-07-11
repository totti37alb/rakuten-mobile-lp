@echo off
cd /d "%~dp0"
if exist .git\index.lock del /f .git\index.lock
git add -A
git commit -m "add: keiba kiji ni gazou tsuika"
git push origin main
git log --oneline -3 > git-last-result.txt
