@echo off
cd /d "%~dp0"
git log --oneline -5 > git-log-output.txt
git status >> git-log-output.txt
