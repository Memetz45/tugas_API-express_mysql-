const Product = require('./model');
const path = require('path');
const fs = require('fs')

// function create
const createProduct = async (req, res) => {
    const { name, price, stock, status } = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, '../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try {
            await Product.sync();
            const result = await Product.create({ name, price, stock, status, image_url: `http:localhost:3001/public/${image.originalname}` });
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }
}
// function read
const readProduct = async (req, res) => {
    try {
        await Product.sync();
        const result = await Product.findAll();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

const updateProduct = async (req, res) => {
    const { name, price, stock, status } = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, '../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try {
            await Product.sync();
            const result = await Product.update({ name, price, stock, status, image_url: `http:localhost:3001/public/${image.originalname}` }, { where:{id: req.params.id}});
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }else{
        try {
            await Product.sync();
            const result = await Product.update({ name, price, stock, status}, { where:{id: req.params.id}});
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }
}
module.exports = { createProduct, readProduct, updateProduct };