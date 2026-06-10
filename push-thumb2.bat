@echo off
cd /d "%~dp0"
echo [1] Removing lock file...
del /f /q ".git\index.lock"
echo Lock removal exit: %errorlevel%
echo [2] Git add...
git add public\articles\zero-cost-phone-bill-thumb.png push-thumb.bat push-thumb2.bat
echo Git add exit: %errorlevel%
echo [3] Git commit...
git commit -m "auto: サムネイル追加 2026-06-08"
echo Git commit exit: %errorlevel%
echo [4] Git push...
git push origin main
echo Git push exit: %errorlevel%
git log --oneline -3 > git-last-result.txt
echo [Done] > push-thumb2-result.txt
echo %errorlevel% >> push-thumb2-result.txt
git log --oneline -3 >> push-thumb2-result.txt
