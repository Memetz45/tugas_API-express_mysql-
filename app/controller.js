const Product = require ('./model');
const path = require ('path');
const fs = require ('fs')

const store = async (req, res) => {
    const {name, price, stock, status} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try{
            await Product.sync();
            const result = await Product.create({name, price, stock, status, image_url: `http:localhost:3001/public/${image.originalname}`});
            res.send(result);
        } catch(error){
            res.send(error);
        }
    }
}

module.exports = {store};