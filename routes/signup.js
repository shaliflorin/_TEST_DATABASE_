var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var account = mongoose.model('accounts');

/* GET form. */
router.get('/', function(req, res) {
    account.find(function(err, accounts){
        console.log(accounts)
        res.render(
            'signup',
            {title : 'Userslist PAGE', accounts : accounts}
        );
    });
});


/* POST form. */
router.post('/', function(req, res) {

    new account({title : req.body.account})
        .save(function(err, account) {
            console.log(account)
            res.redirect('signup');
        });
});

module.exports = router;