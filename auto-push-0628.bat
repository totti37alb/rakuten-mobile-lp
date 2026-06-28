@echo off
cd /d "%~dp0"
if exist ".git\index.lock" del /f /q ".git\index.lock"
git add -A
git commit -m "auto: kiji tsuika 2026-06-28"
git push origin main
git log --oneline -3 > push-result-0628.txt 2>&1
git status >> push-result-0628.txt 2>&1
echo DONE >> push-result-0628.txt
