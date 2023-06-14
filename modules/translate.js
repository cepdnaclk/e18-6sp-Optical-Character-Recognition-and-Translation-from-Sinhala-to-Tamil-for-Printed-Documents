const translate =require('@iamtraction/google-translate');
const fs= require('fs-extra');

async function translateText(srcfile){
    // const src_text=fs.readFileSync('tmp/ocr_results/'+srcfile,{ encoding: 'utf8', flag: 'r' });
    return new Promise(async(resolve,reject)=>{
        try {
            translate(srcfile,{from:'si', to:'ta'}
            ).then(res =>{
                fs.writeFileSync('../tmp/translations/translation.txt',res.text,{encoding:'utf8',flag:'w'});
                resolve(res.text)
            })
        } catch (error) {
            console.error(error);
        }
    });
}

module.exports = { translateText };