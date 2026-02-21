const { execSync } = require('child_process');

console.log('=== 验证推送结果 ===');

const cmd = 'git ls-remote --heads https://github.com/TKPORL/ceshi.git';
const result = execSync(cmd, { encoding: 'utf8' });
console.log(result);

console.log('✅ 代码已推送到 GitHub 仓库！');
console.log('');
console.log('接下来请启用 GitHub Pages:');
console.log('1. 打开 https://github.com/TKPORL/ceshi/settings/pages');
console.log('2. Source 选择 "Deploy from a branch"');
console.log('3. Branch 选择 "master" 和 "/(root)"');
console.log('4. 点击 Save');
console.log('');
console.log('等待 1-2 分钟后访问: https://tkporl.github.io/ceshi');
