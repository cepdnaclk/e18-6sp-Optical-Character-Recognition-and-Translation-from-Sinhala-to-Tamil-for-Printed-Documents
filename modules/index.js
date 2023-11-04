const express=require('express');
const app = express();
const multer=require('multer');
const preprocess_mod=require('./preprocess');
const ocr_mod=require('./ocr');
const translate_mod=require('./translate');
const path =require('path');

//storing images to disk
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../tmp/uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})
var curr=null;

const upload=multer({storage:storage});
const allowedImgaeExtensions = ['.jpg', '.png','.jpeg'];

app.post('/upload',upload.single('uploadedImage'),async (req,res)=>{
    console.log(req.file);
    const fileExtension=path.extname(req.file.filename).toLowerCase();
    curr=req.file.filename.split(".")[0]+'.txt';

    try {
        if(allowedImgaeExtensions.includes(fileExtension)){
            console.log('File extension is allowed:', fileExtension);
            preprocess_mod.preprocess_image(req.file.filename).then( img_buffer => {
                return ocr_mod.ocr_extract(img_buffer);                   
            }).then( text =>{
                return translate_mod.translateText(text,req.file.filename);
            }).then( translated_text => {
                return res.json({
                    message:translated_text
                });
            })  
        } else {
            console.log('File extension is not allowed:', fileExtension);
        }     
    } catch (error) {
        console.error(error);
    }
})

app.get('/download',async (req,res)=>{
    res.download('../tmp/translations/'+curr,"download.txt",(err)=>{
        if(err){
            res.send({
                error:err,
                msg:"Problem downloading the file"
            })
        }
    });
    
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})