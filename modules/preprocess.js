const sharp =require('sharp');


async function preprocess_image(srcfile){

    const input_img='../tmp/uploads/'+srcfile;
    try {
        const img_buffer=await sharp(input_img)
            .grayscale()
            .normalize()
            .median(3)
            .blur(0.5)//denoising image through blur operation
            .sharpen()
            .gamma(2)
            .threshold(0,{method:'otsu'})//apply Otsu's thresholding
            // .toFile('tmp/preprocess_results/'+srcfile)
            .toBuffer()

        console.log('Image preprocessing completed successfully.');

        return img_buffer

    } catch (error) {
        console.error('Error occurred during image preprocessing:', err);
    }
}

module.exports = { preprocess_image };