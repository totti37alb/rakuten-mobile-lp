@echo off
cd /d "%~dp0"
if exist ".git\HEAD.lock" del /f /q ".git\HEAD.lock"
if exist ".git\index.lock" del /f /q ".git\index.lock"
if exist ".git\objects\maintenance.lock" del /f /q ".git\objects\maintenance.lock"
git add -A
git commit -m "auto: サムネ追加 my-rakuten-renewal-data-check"
git push origin main
git log --oneline -3 > git-last-result.txt
echo DONE >> git-last-result.txt
