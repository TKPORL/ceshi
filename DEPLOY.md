# GitHub Pages 部署指南

## 项目已完成！创建了以下文件：

1. **index.html** - 首页（包含欢迎动画、导航、功能卡片）
2. **portfolio.html** - 作品集页面（支持分类筛选、详情弹窗）
3. **about.html** - 关于页面（头像、技能进度条、工作经历时间线）
4. **contact.html** - 联系页面（联系信息和表单）
5. **style.css** - 统一样式文件（响应式设计、动画效果）
6. **script.js** - 交互逻辑（导航、筛选、弹窗、表单等）

## 部署到 GitHub 的步骤：

### 步骤 1: 确保已安装 Git
如果没有安装，从 https://git-scm.com 下载安装。

### 步骤 2: 打开命令行，进入项目目录
```cmd
cd d:\Tsinho文件夹\Trae\cs2\ceshi
```

### 步骤 3: 配置 Git 并推送
```cmd
git config user.name "Tsinho"
git config user.email "TKPORL@outlook.com"
git remote add origin https://github.com/TKPORL/ceshi.git
git add -A
git commit -m "Add personal website"
git push -u origin master
```

### 步骤 4: 启用 GitHub Pages
1. 打开 https://github.com/TKPORL/ceshi
2. 进入 **Settings** → **Pages**
3. Source 选择 **Deploy from a branch**
4. Branch 选择 **master** → **/(root)**
5. 点击 **Save**

等待 1-2 分钟后，网站将在 `https://tkporl.github.io/ceshi` 可访问。

---

**网站功能特点：**
- 紫色渐变主题，现代美观
- 首页带有故障艺术效果的标题动画
- 作品集支持分类筛选（Web/App/设计）
- 技能进度条动画
- 工作经历时间线
- 移动端响应式设计
- 联系表单可直接打开邮件客户端
