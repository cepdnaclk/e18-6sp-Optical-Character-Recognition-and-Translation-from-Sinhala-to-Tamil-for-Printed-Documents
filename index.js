const express=require('express');
const app = express();
const multer=require('multer');
const fs= require('fs-extra');
const translate_mod=require('./translate');

const { createWorker } =require('tesseract.js')


//storing images to disk
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./tmp/uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload=multer({storage:storage})

app.post('/api/upload',upload.single('uploadedImage'),async (req,res)=>{
    console.log(req.file);
    try {
        const worker = await createWorker(
            {logger: m => console.log(m)}
        );

        await worker.loadLanguage('sin');
        await worker.initialize('sin');
        await worker.setParameters({
            tessedit_ocr_engine_mode:2,
            tessedit_pageseg_mode:6,
            
        })
        await worker.recognize(
            'tmp/uploads/'+req.file.filename,            
        ).then(({data:{text}})=>{
            try {
               fs.writeFileSync('tmp/results/'+req.file.filename.split(".")[0]+".txt",text,{flag:'w'});
               translate_mod.translateText('tmp/results/'+req.file.filename.split(".")[0]+".txt")
            } catch (error) {
                console.log(error);
            }
            return res.json(
                {
                    message:text
                }
            )
        })
        await worker.terminate();
    } catch (error) {
        console.error(error);
    }
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})