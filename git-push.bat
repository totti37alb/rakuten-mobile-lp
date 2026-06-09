@echo off
cd /d "%~dp0"
git add -A
git commit -m "fix: add remark-gfm for markdown table support, rewrite coverage article"
git push origin main
git log --oneline -3 > git-last-result.txt
