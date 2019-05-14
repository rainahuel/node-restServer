const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./config/gonfig');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));


app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;

    console.log('base de datos online');
});

app.listen(process.env.PORT, () => {
    console.log("escuchando el puerto: ", process.env.PORT);
});