import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const sourceFolder = '../KnowLab/'; 
const targetFolder = './content';
const attachmentFolder = '../KnowLab/99 - Meta/Attachments/';

// Function to clean the target folder
const cleanTargetFolder = (folder) => {
    if (fs.existsSync(folder)) {
        fs.rmSync(folder, { recursive: true, force: true });
        console.log(`Cleaned target folder: ${folder}`);
    }
};

// Function to sync and filter notes
const syncAndFilterNotes = (currentFolder) => {
    fs.readdir(currentFolder, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${currentFolder}: ${err}`);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(currentFolder, file.name);

            if (file.isDirectory()) {
                syncAndFilterNotes(filePath);
            } else if (file.isFile() && file.name.endsWith('.md')) {
                const content = fs.readFileSync(filePath, 'utf8');

                const match = content.match(/^---\n([\s\S]*?)\n---/);
                if (!match) return;
                
                const yamlContent = match[1];
                try {
                    const frontMatter = yaml.load(yamlContent);
                    if (!frontMatter || frontMatter.publish !== true) return;

                    const relativePath = path.relative(sourceFolder, filePath);
                    const targetPath = path.join(targetFolder, relativePath);

                    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
                    fs.copyFileSync(filePath, targetPath);
                    console.log(`Synced Note: ${relativePath}`);

                    syncAttachments(content);
                } catch (error) {}
            }
        });
    });
};

const syncAttachments = (content) => {
    const attachmentRegex = /!\[\[([^\]]+)\]\]/g; 
    let match;

    while ((match = attachmentRegex.exec(content)) !== null) {
        const attachmentName = match[1]; 
        const attachmentPath = path.join(attachmentFolder, attachmentName);
        const relativePath = path.relative(sourceFolder, attachmentPath);
        const targetPath = path.join(targetFolder, relativePath);

        if (fs.existsSync(attachmentPath)) {
            fs.mkdirSync(path.dirname(targetPath), { recursive: true });
            fs.copyFileSync(attachmentPath, targetPath);
            console.log(`Synced Attachment: ${attachmentName}`);
        } else {
            console.warn(`Attachment not found: ${attachmentName}`);
        }
    }
};

// Clean the target folder before syncing
cleanTargetFolder(targetFolder);

// Run the sync and filter function
syncAndFilterNotes(sourceFolder);
