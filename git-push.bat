@echo off
cd /d "%~dp0"
git add -A
git commit -m "fix: split FAQ answers into multiple paragraphs for readability"
git push origin main
git log --oneline -3 > git-last-result.txt
