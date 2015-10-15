var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Account = new Schema({

    username: String,
    password: String,
    admin: Boolean,
    name: String,
    age: Number,
    credit: String,
    gender: String,
    email: String,
    phone: String,
    registered: String,
});

/*
for(i in Account.paths){
    console.log("=== ",i);
}
*/

mongoose.model('accounts', Account);

mongoose.connect('mongodb://localhost/shaliaccounts');