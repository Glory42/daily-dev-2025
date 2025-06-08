const fs = require('fs');
const path = require('path');

const folderPath = process.argv[2];
console.log('folderPath:', folderPath);
if (!folderPath) {
    console.log('Please provide a folder path');
    process.exit(1);
}

if (!fs.existsSync(folderPath)) {
    console.log('Folder does not exits: ', folderPath);
}

const files = fs.readdirSync(folderPath);

files.forEach(file => {
    const fullPath = path.join(folderPath, file);

    if (fs.lstatSync(fullPath).isFile()) {
        const ext = path.extname(file). slice(1) || 'unknown';
        const destDir = path.join(folderPath,ext);
        if (!fs.existsSync(destDir)) { 
            fs.mkdirSync(destDir);
        }

        const destPath = path.join(destDir, file);
        fs.renameSync(fullPath, destPath);

        console.log(`Moved ${file} → ${ext}/`);
    }
});