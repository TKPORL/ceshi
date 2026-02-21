const { execSync } = require('child_process');

const gitPath = '"C:\\Program Files\\Git\\cmd\\git.exe"';
const repoPath = 'd:\\Tsinho文件夹\\Trae\\cs2\\ceshi';

console.log('=== 强制推送代码到 GitHub ===\n');

try {
    const pushCmd = `${gitPath} -C "${repoPath}" push -u origin master --force`;
    console.log('执行:', pushCmd);
    const result = execSync(pushCmd, { encoding: 'utf8', stdio: 'pipe' });
    console.log('结果:', result);
    console.log('\n✅ 推送成功！');
} catch (e) {
    console.log('错误:', e.message);
    if (e.stdout) console.log('stdout:', e.stdout);
    if (e.stderr) console.log('stderr:', e.stderr);
}

console.log('\n=== 验证推送 ===');
try {
    const logCmd = `${gitPath} -C "${repoPath}" log --oneline -3`;
    const log = execSync(logCmd, { encoding: 'utf8' });
    console.log(log);
} catch(e) {}
