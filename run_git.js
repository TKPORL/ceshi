const { execSync } = require('child_process');

const gitPath = '"C:\\Program Files\\Git\\cmd\\git.exe"';
const repoPath = 'd:\\Tsinho文件夹\\Trae\\cs2\\ceshi';

const commands = [
    { cmd: `${gitPath} -C "${repoPath}" status`, desc: '查看状态' },
    { cmd: `${gitPath} -C "${repoPath}" config user.name "Tsinho"`, desc: '设置用户名' },
    { cmd: `${gitPath} -C "${repoPath}" config user.email "TKPORL@outlook.com"`, desc: '设置邮箱' },
    { cmd: `${gitPath} -C "${repoPath}" add -A`, desc: '添加文件' },
    { cmd: `${gitPath} -C "${repoPath}" commit -m "Initial commit"`, desc: '提交' },
    { cmd: `${gitPath} -C "${repoPath}" remote add origin https://github.com/TKPORL/ceshi.git`, desc: '添加远程' },
    { cmd: `${gitPath} -C "${repoPath}" push -u origin master`, desc: '推送' }
];

for (const { cmd, desc } of commands) {
    console.log(`\n=== ${desc} ===`);
    console.log(cmd);
    try {
        execSync(cmd, { stdio: 'inherit' });
    } catch (e) {
        console.log('错误:', e.message);
    }
}

console.log('\n完成！');
