const { Command } = require('commander');
const program = new Command();

program
  .name('file-organizer')
  .description('Organizes files into folders by extension')
  .version('1.0.0')
  .argument('<folder>', 'folder to organize')
  .option('-v, --verbose', 'verbose output')
  .parse();

const options = program.opts();
const folderPath = program.args[0];

const fs = require('fs');
const path = require('path');
const chalk = require('chalk').default;

function organizeFiles(folderPath, verbose) {
    if (!fs.existsSync(folderPath)) {
        console.log(chalk.red('Folder does not exist:'), folderPath);
        process.exit(1);
    }

    const files = fs.readdirSync(folderPath);
    if (files.length === 0) {
        console.log(chalk.yellow('Folder is empty!'));
        return;
    }

    files.forEach(file => {
        const fullPath = path.join(folderPath, file);

        if (fs.lstatSync(fullPath).isFile()) {
            const ext = path.extname(file).slice(1) || 'unknown';
            const destDir = path.join(folderPath, ext);

            if (!fs.existsSync(destDir)) {
                fs.mkdirSync(destDir);
                if (verbose) console.log(chalk.blue(`Created directory: ${ext}`));
            }

            const destPath = path.join(destDir, file);
            fs.renameSync(fullPath, destPath);

            if (verbose) console.log(chalk.green(`Moved ${file} → ${ext}/`));
        }
    });

    console.log(chalk.green('Organization complete!'));
}

organizeFiles(folderPath, options.verbose);