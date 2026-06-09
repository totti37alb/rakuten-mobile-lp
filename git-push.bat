@echo off
cd /d "%~dp0"
git add -A
git commit -m "content: rewrite all articles with conversational writing style"
git push origin main
git log --oneline -3 > git-last-result.txt
