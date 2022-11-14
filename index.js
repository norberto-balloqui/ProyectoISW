const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const rutapoderado = require('./routes/ApoderadoRoutes')
const rutaParvulos = require('./routes/ParvuloRoutes')
const rutaMatriculas = require('./routes/MatriculaRoutes')


app.use(cors())
app.use(express.json());
app.options('*', cors())

app.use ('/api', rutapoderado);
app.use ('/api', rutaMatriculas);
app.use ('/api', rutaParvulos);

app.listen(process.env.PORT, () => console.log('Server Stared'));

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB,(err) =>
    {
        if (err){
            return console.log('Error al conectar con la base de datos ->', err);
        }
        return console.log('Conectado a la base de datos')
    }

);