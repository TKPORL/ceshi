const { execSync } = require('child_process');

const c = (cmd) => {
    try {
        return execSync(cmd, {encoding:'utf8', stdio:'pipe'});
    } catch(e) { return e.message; }
};

c('git -C "d:\\Tsinho文件夹\\Trae\\cs2\\ceshi" add -A');
c('git -C "d:\\Tsinho文件夹\\Trae\\cs2\\ceshi" commit --allow-empty -m "Update"');
const r = c('git -C "d:\\Tsinho文件夹\\Trae\\cs2\\ceshi" push origin main --force');
console.log(r);
