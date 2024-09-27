const docma = require('docma');
const fs = require('fs');

const outputDir = './output/docs';
const staticDir = './static';

let docmaConfig = JSON.parse(fs.readFileSync('./docma_config.json'));
docmaConfig.dest = outputDir;

docma.create()
    .build(docmaConfig).then(() => {
        copyStaticFolderContentsRecursive();
    })
    .catch(error => {
        console.log(error);
    })

function copyStaticFolderContentsRecursive() {
    fs.readdirSync(staticDir, {recursive: true}).forEach(file => {
        console.log(`Copy static file: ${staticDir}/${file} -> ${outputDir}/${file}`);
        fs.copyFileSync(`${staticDir}/${file}`, `${outputDir}/${file}`);
    });
}