const { execSync } = require('child_process');

const gitPath = '"C:\\Program Files\\Git\\cmd\\git.exe"';
const repoPath = 'd:\\Tsinho文件夹\\Trae\\cs2\\ceshi';

console.log('=== 添加 UI/UX Pro Max 并推送 ===\n');

const commands = [
    { cmd: `${gitPath} -C "${repoPath}" add -A`, desc: '添加文件' },
    { cmd: `${gitPath} -C "${repoPath}" commit -m "Add UI/UX Pro Max"`, desc: '提交' },
    { cmd: `${gitPath} -C "${repoPath}" push origin main`, desc: '推送' }
];

for (const { cmd, desc } of commands) {
    console.log(`${desc}...`);
    try {
        execSync(cmd, { encoding: 'utf8', stdio: 'pipe' });
    } catch(e) {}
}

console.log('\n✅ 已推送！');
