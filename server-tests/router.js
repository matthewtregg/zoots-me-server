/* eslint-disable no-undef */
const router = require('express').Router()
const controller = require('./controllers/controller.js');

router.get('/photo-data', controller.getAllPhotoData);
router.post('/photo-data', controller.addPhotoData); 

module.exports = router;
