@echo off
echo ================================
echo   GitHub Pages 部署脚本
echo ================================
echo.

cd /d "%~dp0"

echo [1/5] 初始化Git仓库...
git init

echo [2/5] 配置用户信息...
git config user.name "Tsinho"
git config user.email "TKPORL@outlook.com"

echo [3/5] 添加所有文件...
git add -A

echo [4/5] 提交更改...
git commit -m "Update personal website"

echo [5/5] 推送到GitHub...
echo 请确保远程仓库已配置，使用以下命令：
echo   git remote add origin https://github.com/TKPORL/ceshi.git
echo   git push -u origin master
echo.

echo 如果远程仓库未配置，请运行以下命令：
echo   git remote add origin https://github.com/TKPORL/ceshi.git
echo   git push -u origin master

pause
