@echo off
chcp 65001 >nul
title GitHub 部署脚本

echo ========================================
echo    Tsinho 个人主页 - 一键部署
echo ========================================
echo.

cd /d "%~dp0"

echo [步骤 1/5] 配置 Git 用户信息...
git config user.name "Tsinho"
git config user.email "TKPORL@outlook.com"

echo.
echo [步骤 2/5] 添加所有文件到暂存区...
git add -A

echo.
echo [步骤 3/5] 提交更改...
git commit -m "Add personal website"

echo.
echo [步骤 4/5] 添加远程仓库...
git remote add origin https://github.com/TKPORL/ceshi.git 2>nul
echo 远程仓库已添加

echo.
echo [步骤 5/5] 推送到 GitHub...
echo 请输入你的 GitHub 用户名和密码
git push -u origin master

echo.
echo ========================================
echo 部署完成！
echo.
echo 接下来请启用 GitHub Pages:
echo 1. 打开 https://github.com/TKPORL/ceshi/settings/pages
echo 2. Source 选择 "Deploy from a branch"
echo 3. Branch 选择 "master" 和 "/(root)"
echo 4. 点击 Save
echo.
echo 等待 1-2 分钟后访问: https://tkporl.github.io/ceshi
echo ========================================

pause
