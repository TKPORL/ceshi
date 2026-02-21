const { execSync } = require('child_process');

console.log('=== 测试远程仓库连接 ===');

const cmd = 'git ls-remote https://github.com/TKPORL/ceshi.git';
console.log(cmd);

try {
    const result = execSync(cmd, { encoding: 'utf8', stdio: 'pipe', timeout: 30000 });
    console.log('结果:');
    console.log(result);
} catch(e) {
    console.log('错误:', e.message);
    if (e.stderr) console.log('stderr:', e.stderr);
}
