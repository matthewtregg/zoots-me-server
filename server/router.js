const router = require('express').Router()
const controller = require('./controllers/controller.js');

router.get('/photo_data', controller.getAllPhotosData);
router.post('/photo_data', controller.addPhotoData); 

module.exports = router;
