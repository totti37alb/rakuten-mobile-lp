@echo off
cd /d "%~dp0"
git push origin main > push-result.txt 2>&1
echo Exit code: %errorlevel% >> push-result.txt
git log --oneline -3 >> push-result.txt
