const router = require('express').Router();
const multer = require ('multer');
const upload = multer({dest: 'uploads'});
const appController = require ('./controller');

router.post('/product',upload.single('image'), appController.store );

module.exports = router;