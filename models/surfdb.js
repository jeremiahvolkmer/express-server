var mongoose = require('mongoose');

 //remote db connection settings. For security, connectionString should be in a separate file not committed to git
 var connectionString = "mongodb://jeremiahvolkmer:Thenew12!!!@ds141671.mlab.com:41671/surfebords";
 mongoose.connect(connectionString);

// local db connection settings 
// var ip = process.env.ip || '127.0.0.1';
// mongoose.connect('mongodb://' +ip+ '/<DB_NAME>');

var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));

// define Book model in JSON key/value pairs
// values indicate the data type of each key
var mySchema = mongoose.Schema({
 brand: { type: String, required: true },
 length: Number,
 width: Number,
 volume: Number,
 fins: String
}); 



module.exports = mongoose.model('Surfboard', mySchema);