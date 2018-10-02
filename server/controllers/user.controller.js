const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user');

exports.create = (req, res) => {
    /*let user = new User({
        login: req.body.login,
        email: req.body.email,
        password: setPassword(req.body.password)
    });*/
    let user = new User({
        login: 'Lina',
        email: 'lina@mail.ru',
        password: setPassword('qwerty')
    });
    

    user.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
};

exports.auth = (req, res) => {
    console.log(req.body);
    return 'auth';
};

exports.profile = (req, res) => {
    console.log('ответ' + req.body);
    return 'profile';
};