//importo express
const express  = require('express');

//inizializzo express
const app = express();

//inizializzo la porta
const port = 3000;

//home
app.get('/', (req,res) =>{
    res.send('Home');
});