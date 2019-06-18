const events = require('../models/model.js');

exports.getAllPhotosData = async (request, response) => {
  try {
    const result = await events.find();
    console.log(result,'get')
    response.status(200).send(result);
  } catch (e) {
    response.status(500).send();
  } 
}

exports.addPhotoData = async (request, response) => {
  try {
    
    const result = await new events(request.body).save();
    console.log(result,'post')
    response.status(200).send(result);
  } catch (e) {
    response.status(500).send();
  }
}