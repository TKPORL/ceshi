const { execSync } = require('child_process');

const gitPath = '"C:\\Program Files\\Git\\cmd\\git.exe"';
const repoPath = 'd:\\Tsinho文件夹\\Trae\\cs2\\ceshi';

console.log('=== 检查远程仓库 ===');
const cmd = `${gitPath} -C "${repoPath}" remote -v`;
console.log(cmd);
try {
    const result = execSync(cmd, { encoding: 'utf8', stdio: 'pipe' });
    console.log(result);
} catch(e) {
    console.log('Error:', e.message);
}

console.log('\n=== 检查分支 ===');
const branchCmd = `${gitPath} -C "${repoPath}" branch -vv`;
console.log(branchCmd);
try {
    const result = execSync(branchCmd, { encoding: 'utf8', stdio: 'pipe' });
    console.log(result);
} catch(e) {
    console.log('Error:', e.message);
}
