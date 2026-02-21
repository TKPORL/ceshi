const fs = require('fs');
const path = require('path');
const https = require('https');

const repoPath = 'd:\\Tsinho文件夹\\Trae\\cs2\\ceshi';
const owner = 'TKPORL';
const repo = 'ceshi';
const branch = 'master';
const token = process.env.GH_TOKEN;

const files = [
    'index.html',
    'portfolio.html', 
    'about.html',
    'contact.html',
    'style.css',
    'script.js'
];

if (!token) {
    console.log('错误: 需要设置 GH_TOKEN 环境变量');
    console.log('请在命令行中设置: set GH_TOKEN=你的GitHub令牌');
    console.log('');
    console.log('或者你可以手动运行以下命令:');
    console.log('1. 打开命令提示符');
    console.log('2. cd d:\\Tsinho文件夹\\Trae\\cs2\\ceshi');
    console.log('3. git config user.name "Tsinho"');
    console.log('4. git config user.email "TKPORL@outlook.com"');
    console.log('5. git add -A');
    console.log('6. git commit -m "Initial commit"');
    console.log('7. git remote add origin https://github.com/TKPORL/ceshi.git');
    console.log('8. git push -u origin master');
    process.exit(1);
}

async function uploadFile(filePath, content) {
    const fileName = path.basename(filePath);
    const encodedPath = encodeURIComponent(fileName);
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${encodedPath}`;
    
    const blobSha = await createBlob(content);
    
    const options = {
        hostname: 'api.github.com',
        path: `/repos/${owner}/${repo}/contents/${fileName}`,
        method: 'PUT',
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        }
    };
    
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log(`${fileName}: ${res.statusCode}`);
                resolve(JSON.parse(data));
            });
        });
        
        req.on('error', reject);
        req.write(JSON.stringify({
            message: `Add ${fileName}`,
            content: Buffer.from(content).toString('base64'),
            branch: branch
        }));
        req.end();
    });
}

async function createBlob(content) {
    return Buffer.from(content).toString('base64');
}

async function main() {
    console.log('开始上传文件到 GitHub...\n');
    
    for (const file of files) {
        const filePath = path.join(repoPath, file);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            await uploadFile(filePath, content);
        }
    }
    
    console.log('\n上传完成！');
    console.log('请在 GitHub 仓库设置中启用 GitHub Pages');
}

main().catch(console.error);
