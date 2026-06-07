@echo off
cd /d "%~dp0"
git add -A
git commit -m "style: article design improvements - H2 red border, callout boxes, red bullets, decorative HR"
git push origin main
pause
