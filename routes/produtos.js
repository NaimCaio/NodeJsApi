const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/',(req, res, next)=>{
    res.status(200).send({
        mensagem: 'get rota proddutos'
    })
});

router.post('/', (req, res, next)=>{
    mysql.getConnection((error, conn)=>{
        if(error){
            return res.status(500).send({
                error:error,
                response:null
            })
        }
        conn.query(
            'INSERT INTO produtos (nome, preco) values (?,?)',
            [req.body.nome, req.body.preco],
            (error, resultado, field)=>{
                conn.release();
                
                res.status(201).send({
                    mensagem: 'produto inserido com sucesso',
                    id_produto : resultado.insertId
                })
            }
        )
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