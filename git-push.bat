@echo off
cd /d "%~dp0"
if exist .git\index.lock del /f .git\index.lock
git add -A
git commit -m "auto: kiji tsuika 2026-07-11 saikyo-kanshasai"
git push origin main
git log --oneline -3 > git-last-result.txt
