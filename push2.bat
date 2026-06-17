@echo off
cd /d "%~dp0"
if exist ".git\HEAD.lock" del /f /q ".git\HEAD.lock"
if exist ".git\index.lock" del /f /q ".git\index.lock"
if exist ".git\objects\maintenance.lock" del /f /q ".git\objects\maintenance.lock"
echo ===ADD=== > push2-out.txt
git add -A >> push2-out.txt 2>&1
echo ===COMMIT=== >> push2-out.txt
git commit -m "auto: サムネ追加 my-rakuten-renewal-data-check" >> push2-out.txt 2>&1
echo ===PUSH=== >> push2-out.txt
git push origin main >> push2-out.txt 2>&1
echo ===LOG=== >> push2-out.txt
git log --oneline -3 >> push2-out.txt 2>&1
echo ===STATUS=== >> push2-out.txt
git status -b --short >> push2-out.txt 2>&1
echo ===END=== >> push2-out.txt
