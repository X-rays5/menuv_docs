const docma = require('docma');
const fs = require('fs');

const outputDir = './output/docs';

let docmaConfig = JSON.parse(fs.readFileSync('./docma_config.json'));
docmaConfig.dest = outputDir;

docma.create()
    .build(docmaConfig).then(() => {
        fs.copyFile('./robots.txt', `${outputDir}/robots.txt`, (err) => {
            if (err) {
                throw err;
            } 
        
            console.log('robots.txt was copied to the output directory');
        });
    })
    .catch(error => {
        console.log(error);
    })