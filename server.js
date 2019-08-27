const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')
const cors = require('cors');
const dotenv = require('dotenv');

require('dotenv').config()


// Inicializando o App 
const app = express();
app.use(express.json());
app.use(cors());

// Inicializando Mongoose
mongoose.connect(process.env.URL_ACESS,
{
    useNewUrlParser: true
});

//if(mongoose.connect) return console.log('Connected with sucess')

requireDir('./src/models/');
const Product = mongoose.model('Product');

// Rotas
app.use('/api', require('./src/Routes'))

app.listen(3001);