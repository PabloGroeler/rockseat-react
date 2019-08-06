const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://pablogroeler:groeler1@cluster0-3l9so.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json())
server.use(routes);

server.listen(3333);