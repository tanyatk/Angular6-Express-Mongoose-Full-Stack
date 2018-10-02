const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/user');

passport.use(new LocalStrategy({
        usernameField: 'login'
    },
    function(login, password, done) {
        User.findOne({ login: login }, function (err, user) {
            if (err) { return 'вот ' + done(err); }
            // Return if user not found in database
            if (!user) {
            return done(null, false, {
                message: 'Пользователь не найден'
            });
        }
        // Return if password is wrong
        if (!user.validPassword(password)) {
            return done(null, false, {
            message: 'Не верный пароль'
        });
        }
        // If credentials are correct, return the user object
        return done(null, user);
    });
    }
));