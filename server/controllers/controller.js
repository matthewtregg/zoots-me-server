const events = require('../models/model.js');

exports.getAllPhotosData = async (request, response) => {
  try {
    const result = await events.find();
    response.status(200).send(result);
  } catch (e) {
    response.status(500).send();
  } 
}

exports.addPhotoData = async (request, response) => {
  try {
    console.log('hello world')
    const result = await new events(request.body).save();
    response.status(200).send(result);
  } catch (e) {
    response.status(500).send();
  }
}