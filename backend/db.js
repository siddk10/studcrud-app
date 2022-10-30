var mongoose = require('mongoose');
 
// make a connection 
mongoose.connect('mongodb://test:test@cluster0-shard-00-00.afnqv.mongodb.net:27017,cluster0-shard-00-01.afnqv.mongodb.net:27017,cluster0-shard-00-02.afnqv.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-hvpbkk-shard-0&authSource=admin&retryWrites=true&w=majority');
// get reference to database
var StudentSchema = mongoose.Schema({ name: String,
    date: String,
    email: String,
    called:String });

var db = mongoose.connection;
let stud = mongoose.model('stud', StudentSchema, 'studstore');
module.exports=stud