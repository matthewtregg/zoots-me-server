const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/zoots-me', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});

module.exports = mongoose;