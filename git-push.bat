@echo off
cd /d "%~dp0"
git add -A
git commit -m "feat: use totti.png as author avatar"
git push origin main
git log --oneline -3 > git-last-result.txt
