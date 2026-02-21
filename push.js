const { execSync } = require('child_process');

const gitPath = '"C:\\Program Files\\Git\\cmd\\git.exe"';
const repoPath = 'd:\\Tsinho文件夹\\Trae\\cs2\\ceshi';

console.log('=== 推送代码到 GitHub ===\n');

try {
    const result = execSync(`${gitPath} -C "${repoPath}" push -u origin master`, { 
        encoding: 'utf8',
        stdio: 'pipe'
    });
    console.log(result);
    console.log('\n✅ 推送成功！');
} catch (e) {
    console.log('错误输出:', e.message);
    console.log('标准输出:', e.stdout);
}

console.log('\n=== 检查 Git 日志 ===');
try {
    const log = execSync(`${gitPath} -C "${repoPath}" log --oneline -3`, { encoding: 'utf8' });
    console.log(log);
} catch(e) {}
