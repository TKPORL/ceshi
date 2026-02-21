const { execSync } = require('child_process');

const c = (cmd) => execSync(cmd, {encoding:'utf8', stdio:'pipe'});

console.log(c('git -C "d:\\Tsinho文件夹\\Trae\\cs2\\ceshi" status'));
console.log(c('git -C "d:\\Tsinho文件夹\\Trae\\cs2\\ceshi" log --oneline -3'));
