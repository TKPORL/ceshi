const { execSync } = require('child_process');

const repoPath = 'd:\\Tsinho文件夹\\Trae\\cs2\\ceshi';

function runGit(cmd) {
    console.log(`> git ${cmd}`);
    try {
        execSync(`git ${cmd}`, { 
            cwd: repoPath, 
            stdio: 'inherit',
            shell: true 
        });
        console.log('');
    } catch (e) {
        console.error('Error:', e.message);
        process.exit(1);
    }
}

console.log('=== 1. 提交更改 ===');
runGit('commit -m "Initial commit"');

console.log('=== 2. 添加远程仓库 ===');
runGit('remote add origin https://github.com/TKPORL/ceshi.git');

console.log('=== 3. 推送到GitHub ===');
runGit('push -u origin master');

console.log('=== 完成！代码已推送到 GitHub ===');
