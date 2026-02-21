const { execSync } = require('child_process');

const gitPath = '"C:\\Program Files\\Git\\cmd\\git.exe"';
const repoPath = 'd:\\Tsinho文件夹\\Trae\\cs2\\ceshi';

console.log('=== 强制推送到 main 分支 ===\n');

try {
    const cmd1 = `${gitPath} -C "${repoPath}" checkout -b main`;
    console.log('创建/切换 main 分支');
    execSync(cmd1, { encoding: 'utf8', stdio: 'pipe' });
} catch(e) {}

try {
    const cmd2 = `${gitPath} -C "${repoPath}" push -u origin main --force`;
    console.log('强制推送:', cmd2);
    const result = execSync(cmd2, { encoding: 'utf8', stdio: 'pipe' });
    console.log('成功!');
    console.log(result);
} catch(e) {
    console.log('错误:', e.message);
}

console.log('\n=== 验证结果 ===');
const cmd3 = 'git ls-remote --heads https://github.com/TKPORL/ceshi.git';
const result = execSync(cmd3, { encoding: 'utf8' });
console.log(result);
