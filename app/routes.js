const router = require('express').Router();
const multer = require ('multer');
const upload = multer({dest: 'uploads'});
const appController = require ('./controller');

// route create
router.post('/product',upload.single('image'), appController.createProduct );
// route read
router.get('/product', appController.readProduct );
// route update
router.put('/product/:id',upload.single('image'), appController.updateProduct );

module.exports = router;