@echo off
cd /d "d:\Tsinho文件夹\Trae\cs2\ceshi"
git config user.name "Tsinho"
git config user.email "TKPORL@outlook.com"
git add -A
git commit -m "Initial commit"
git remote add origin https://github.com/TKPORL/ceshi.git
git push -u origin master
pause
