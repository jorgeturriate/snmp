const express= require('express');
const snmp= require('snmp-native');
const bodyParser= require('body-parser');

const app= express();

//Cargamos dependencias de las rutas para la API
const equiposRoute= require('./routes/equiposRoute');

//Configuration body parser
app.use(bodyParser.urlencoded({extended: true}));
// Use body-parser as middleware for the app.
app.use(bodyParser.json());

//Aqui cargamos las rutas de la API para jalar data de los equipos
app.use('/api', equiposRoute);

app.use('/',(req,res,next)=>{
    res.send('<h1>Hola mundo</h1>');
})

app.listen(3000, (port)=>{
    console.log("Listening on port 3000");
});