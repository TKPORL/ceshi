const { execSync } = require('child_process');

console.log('=== 验证推送 ===');
const cmd = 'git ls-remote https://github.com/TKPORL/ceshi.git';
const result = execSync(cmd, { encoding: 'utf8' });
console.log(result);

console.log('\n✅ 完成！');
