const mongoose = require('mongoose');

var connectionString = "mongodb://localhost:27017/catalogdb";


mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;