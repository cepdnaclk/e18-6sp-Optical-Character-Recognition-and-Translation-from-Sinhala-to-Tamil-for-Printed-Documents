const express=require('express');
const app = express();
const multer=require('multer');
const preprocess_mod=require('./preprocess');
const ocr_mod=require('./ocr');
const translate_mod=require('./translate');

//storing images to disk
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../tmp/uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload=multer({storage:storage})

app.post('/api/upload',upload.single('uploadedImage'),async (req,res)=>{
    console.log(req.file);
    try {
        preprocess_mod.preprocess_image(req.file.filename)
            .then( img_buffer => {
                return ocr_mod.ocr_extract(img_buffer);                   
            }).then( text =>{
                return translate_mod.translateText(text);
            }).then( translated_text => {
                return res.json({
                        message:translated_text
                });
            })       
    } catch (error) {
        console.error(error);
    }
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})