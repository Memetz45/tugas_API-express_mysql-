const router = require('express').Router();
const multer = require ('multer');
const upload = multer({dest: 'uploads'});
const appController = require ('./controller');

// route create
router.post('/product',upload.single('image'), appController.createProduct );
// route read
router.get('/product', appController.readProduct );

module.exports = router;