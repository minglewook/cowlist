const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cows', {useNewUrlParser: true});

var db = mongoose.connection;

let cowSchema = new mongoose.Schema({
  name: String,
  description: String
});

let Cows = mongoose.model('Cows', cowSchema);


//module.exports. --- = ---
