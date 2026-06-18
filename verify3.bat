@echo off
cd /d "%~dp0"
echo ===HEAD-vs-ORIGIN=== > verify3-out.txt
git rev-parse HEAD >> verify3-out.txt 2>&1
git rev-parse origin/main >> verify3-out.txt 2>&1
echo ===THUMB-TRACKED=== >> verify3-out.txt
git ls-files public/articles/my-rakuten-renewal-data-check-thumb.png >> verify3-out.txt 2>&1
echo ===ARTICLE-TRACKED=== >> verify3-out.txt
git ls-files content/articles/2026-06-17-my-rakuten-renewal-data-check.md >> verify3-out.txt 2>&1
echo ===HEAD-FILES=== >> verify3-out.txt
git show --stat --oneline HEAD >> verify3-out.txt 2>&1
echo ===END=== >> verify3-out.txt
