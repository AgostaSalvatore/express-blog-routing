    //importo express
    const express = require('express');

    //inizializzo router
    const router = express.Router();

    //vado a riprendere l'array
    const posts = require('../posts.js')

    //index
    router.get('/:id', (req,res) =>{
        res.send('Lista dei posts')
    });

    //show
    router.get('/:id', (req,res) =>{
        res.send(`dettaglio del post ${req.params.id}`);
    });
    
    //store
    router.post('/',(req,res) =>{
        res.send('Inserimento totale dei posts');
    })

    module.exports = router;