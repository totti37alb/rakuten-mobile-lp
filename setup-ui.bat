@echo off
cd /d "%~dp0"
echo === STEP 1: DESIGN.md (Wise) ===
npx getdesign@latest add wise
echo.
echo === STEP 2: shadcn/ui init ===
npx shadcn@latest init -d
echo.
echo === DONE ===
pause
