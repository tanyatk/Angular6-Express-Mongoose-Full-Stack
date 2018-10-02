const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};
const passport = require('passport');
require('./models/user');
require('./config/strategy');

const PORT = process.env.PORT || 3000;
const api = require('./routes/api');

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tasks'); 

var db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
    app.use('/api', api);
  
});

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

app.listen(PORT, function(){
    console.log('Server running on http://localhost:' + PORT);
});
