const mongoose = require('mongoose');
const Task = require('../models/task');

exports.create = (req, res) => {
    let task = new Task({
        title: req.body.title,
        text: req.body.text
    });
    task.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });

};

exports.findAll = (req, res) => {
    Task.find()
    .then(tasks => {
        res.json(tasks);
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};

exports.findOne = (req, res) => {
    Task.findOne({'_id': req.params.id})
    .then(task => {
        if(!task) {
            return res.status(404).json({
                msg: 'Task not found with id ' + req.params.id
            });            
        }
        res.json(task);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'Task not found with id ' + req.params.id
            });                
        }
        return res.status(500).json({
            msg: 'Error retrieving Task with id ' + req.params.id
        });
    });
};

exports.delete = (req, res) => {
    Task.findOneAndDelete({'_id': req.params.id})
    .then(task => {
        if(!task) {
            return res.status(404).json({
                msg: 'Task not found with id ' + req.params.id
            });
        }
        res.json({msg: 'Task deleted successfully!'});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: 'Task not found with id ' + req.params.id
            });                
        }
        return res.status(500).json({
            msg: 'Could not delete task with id ' + req.params.id
        });
    });
};

exports.update = (req, res) => {
    Task.findByIdAndUpdate(req.params.id, {$set:req.body}, {new: true})
    .then(task => {
        if(!task) {
            return res.status(404).json({
                msg: 'Task not found with id ' + req.params.id
            });
        }
        res.json(task);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'Task not found with id ' + req.params.id
            });                
        }
        return res.status(500).json({
            msg: 'Error updating task with id ' + req.params.id
        });
    });
};