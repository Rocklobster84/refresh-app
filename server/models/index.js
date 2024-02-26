const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

const uri = 'mongodb://localhost:27017';

const client = mongoose.connect(uri);

module.exports.User = require("./user");