const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const swagger = require('swagger-ui-express');
const swaggerJson = require('./swagger.json');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended :false}));
app.use(bodyParser.json());

//app.use('/',swagger.serve, swagger.setup(swaggerJson))

app.use((req,res,next)=>{
    res.header('Acces-Control-Alow-Origin','*');
    res.header('Acces-Control-Alow-Header',
        'Content-Type, Origin, X-Requested-With, Accept, Authorization'
    );
    if(req.method==='OPTIONS' ){
        res.header('Acces-Control-Alow-Methods', 'PUT, POST, GET, PATCH, DELETE');
        return res.status(200).send({});
    }
    next();
})

app.use('/produtos',rotaProdutos);
app.use('/pedidos',rotaPedidos);

app.use((req, res, next)=>{
    const erro = new Error('Caminho  não encontrado');
    erro.status =404 ;
    next(erro);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    return res.send({
        erro:{
            mensagem: error.message
        }
    });
});


module.exports =app;