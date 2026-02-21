const { execSync } = require('child_process');

const cmd1 = 'git -C "d:\\Tsinho文件夹\\Trae\\cs2\\ceshi" add -A';
const cmd2 = 'git -C "d:\\Tsinho文件夹\\Trae\\cs2\\ceshi" commit -m "Add UI/UX Pro Max"';
const cmd3 = 'git -C "d:\\Tsinho文件夹\\Trae\\cs2\\ceshi" push origin main';

execSync(cmd1);
execSync(cmd2);
execSync(cmd3);

console.log('Done');
