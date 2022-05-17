const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).send({
        mensagem: 'get rota proddutos'
    })
});

router.post('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: 'post rota proddutos'
    })
});

router.get('/:id_produto',(req, res, next)=>{
    const id = req.params.id_produto;
    res.status(200).send({
        mensagem: 'get rota proddutos exclusivo',
        id :id
    })
});

module.exports= router;