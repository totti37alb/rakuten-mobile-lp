@echo off
cd /d "%~dp0"
git add -A
git commit -m "feat: redesign all pages with Wise editorial design system"
git push origin main
git log --oneline -3 > git-last-result.txt
