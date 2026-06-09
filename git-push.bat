@echo off
cd /d "%~dp0"
git add -A
git commit -m "design: overhaul PersonalIntro, Benefits, Articles, FAQ, CTA sections"
git push origin main
git log --oneline -3 > git-last-result.txt
