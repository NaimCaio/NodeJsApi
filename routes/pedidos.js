const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).send({
        mensagem: 'retorna todos pedido'
    })
});

router.post('/', (req, res, next)=>{
    const pedido ={
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    };
    res.status(201).send({
        mensagem: 'post rota proddutos',
        pedidoCriado : pedido
    })
});


module.exports=router