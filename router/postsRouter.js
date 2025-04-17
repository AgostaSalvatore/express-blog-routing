    //importo express
    const express = require('express');

    //inizializzo router
    const router = express.Router();

    //vado a riprendere l'array
    const posts = require('../posts.js')

    //index
    router.get('/', (req,res) =>{
        res.json(posts)
    });

    //show
    router.get('/:id', (req,res) =>{
        res.send(`dettaglio del post ${req.params.id}`);
    });
    
    //store
    router.post('/',(req,res) =>{
        res.send('Inserimento di un nuovo post');
    })

    //update
    router.put('/:id', (req,res) =>{
        res.send(`Modifica totale del post ${req.params.id}`);
    });

    //modify
    router.patch('/:id', (req,res) =>{
        res.send(`Modifica parziale del post ${req.params.id}`);
    });

    //destroy
    router.delete('/:id', (req,res) =>{
        res.send(`Eliminazione del post ${req.params.id}`);
    });

    module.exports = router;