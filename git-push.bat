@echo off
cd /d "%~dp0"
git add -A
git commit -m "content: update coverage-area article with 2026 data"
git push origin main
git log --oneline -3 > git-last-result.txt
