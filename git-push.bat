@echo off
cd /d "%~dp0"
del "content\articles\rakuten-point-guide-2026.md"
del "content\articles\2026-06-07-rakuten-mobile-point-maximize.md"
git add -A
git commit -m "remove: delete low-quality articles"
git push origin main
git log --oneline -3 > git-last-result.txt
