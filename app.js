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

//inizializzo il listen del server sulla porta 3000
app.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
})