const translate =require('@iamtraction/google-translate');
const fs= require('fs-extra');

async function translateText(srcFile){
    const src_text=fs.readFileSync(srcFile,{ encoding: 'utf8', flag: 'r' })
    try {
        translate(src_text,{from:'si', to:'ta'}
        ).then(res =>{
            try {
                fs.writeFileSync('tmp/translations/final.txt',res.text,{encoding:'utf8',flag:'w'});
             } catch (error) {
                 console.log(error);
             }
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { translateText };