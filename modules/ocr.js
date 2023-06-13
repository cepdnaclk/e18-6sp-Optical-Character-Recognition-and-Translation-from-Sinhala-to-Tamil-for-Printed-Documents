const fs= require('fs-extra');


const { createWorker } =require('tesseract.js')
const languages =['eng','sin','tam']

async function ocr_extract(srcfile){
    return new Promise(async(resolve,reject)=>{
        try {
            const worker = await createWorker(
                {logger: m => console.log(m)}
            );
    
            await worker.loadLanguage(languages.join('+'));
            await worker.initialize(languages.join('+'));
            await worker.setParameters({
                tessedit_ocr_engine_mode:2,
                tessedit_pageseg_mode:6,
                
            })
            await worker.recognize(
                // 'tmp/preprocess_results/'+srcfile.file.filename,
                srcfile,
            ).then(({data:{text}})=>{
                try {
                    fs.writeFileSync('../tmp/ocr_results/'+'ocr'+".txt",text,{flag:'w'});
                //    fs.writeFileSync('tmp/ocr_results/'+srcfile.file.filename.split(".")[0]+".txt",text,{flag:'w'});
                //    translate_mod.translateText(srcfile.file.filename.split(".")[0]+".txt")
                } catch (error) {
                    console.log(error);
                }
                resolve(text)
            })
            await worker.terminate();
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}

module.exports = { ocr_extract };