const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Task = require('../models/task');
const User = require('../models/user');

let tasks = require('../controllers/task.controller.js');
let users = require('../controllers/user.controller.js');

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); 
});

//get all tasks
router.route('/tasks/').get(tasks.findAll);

//create new task
router.route('/tasks/create').post(tasks.create);

//get a single task by Id
router.route('/tasks/:id').get(tasks.findOne);

//delete a task with Id
router.route('/tasks/delete/:id').delete(tasks.delete);

//update a task with Id
router.route('/tasks/update/:id').put(tasks.update);

//create new user
router.route('/signin').post(users.create);

//auth user
router.route('/login').post(users.auth);

//auth user
router.route('/profile/:id').get(users.profile);

module.exports = router;