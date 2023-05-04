//Carregando Modulos
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require('./config/routes');


const app = express();
app.use(morgan('dev'));

//Configurando BodyPaser e cors, e routes;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(routes);


//Ligando servidor
const port = process.env.port || 8081;
app.listen(port, () => {
    console.log("Servidor On");
});
