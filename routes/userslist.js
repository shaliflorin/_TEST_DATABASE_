var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var account = mongoose.model('accounts');


/* GET form. */
router.get('/', function(req, res) {
    account.find(function(err, accounts){
        console.log(accounts);
        res.render(
            'userslist',
            {title : 'Userslist PAGE', accounts : accounts}
        );
    });
});




module.exports = router;