const express = require('express');
const routes = express.Router();

let db = [
    {'1': { Nome: "Cliente 1", Idade: "20" }},
    {'2': { Nome: "Cliente 2", Idade: "40" }},
    {'3': { Nome: "Cliente 3", Idade: "30" }}
];
//Buscar dados
routes.get('/', (req, res) => {
    return res.json(db);
});

// Inserir Dados
routes.post('/add', (req, res) => {
    console.log(req.body);
    const { Nome, Idade } = req.body;
    const body = { Nome, Idade };
    db.push(body);
    console.log(body);
    return res.json(body);
});

routes.delete('/:id', (req, res) => {
    const id = req.params.id;
    let newDB = db.filter(item => {
        if(!item[id]) 
            return item;
    });
    db = newDB;
    return res.send(newDB);
});



module.exports = routes