const translate =require('@iamtraction/google-translate');
const fs= require('fs-extra');

async function translateText(srcfile,filename){
    // const src_text=fs.readFileSync('tmp/ocr_results/'+srcfile,{ encoding: 'utf8', flag: 'r' });
    return new Promise(async(resolve,reject)=>{
        try {
            translate(srcfile,{from:'si', to:'ta'}
            ).then(res =>{
                fs.appendFile('../tmp/translations/'+filename.split(".")[0]+'.txt',res.text,'utf8',err=>{
                    if(err){
                        throw err;
                    }
                });
                resolve(res.text)
            })
        } catch (error) {
            console.error(error);
        }
    });
}

module.exports = { translateText };