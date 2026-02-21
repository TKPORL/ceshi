const { execSync } = require('child_process');

const gitPath = '"C:\\Program Files\\Git\\cmd\\git.exe"';
const repoPath = 'd:\\Tsinho文件夹\\Trae\\cs2\\ceshi';

console.log('=== 强制推送 ===\n');

const commands = [
    { cmd: `${gitPath} -C "${repoPath}" add -A`, desc: '添加文件' },
    { cmd: `${gitPath} -C "${repoPath}" commit --allow-empty -m "Add UI/UX Pro Max"`, desc: '提交' },
    { cmd: `${gitPath} -C "${repoPath}" push origin main --force`, desc: '强制推送' }
];

for (const { cmd, desc } of commands) {
    console.log(`${desc}...`);
    try {
        execSync(cmd, { encoding: 'utf8', stdio: 'pipe' });
        console.log('成功');
    } catch(e) {
        console.log('错误:', e.message);
    }
}

console.log('\n验证...');
const r = execSync('git ls-remote https://github.com/TKPORL/ceshi.git', { encoding: 'utf8' });
console.log(r);
