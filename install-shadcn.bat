@echo off
cd /d "%~dp0"
echo Installing shadcn/ui dependencies...
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate @radix-ui/react-slot lucide-react
echo.
echo Done! shadcn/ui is ready.
pause
