const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-zqghk.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// get = utilizado para buscar uma informação do backend
// post = utilizado para criar uma nova informação do backend
// put = utilizado para editar uma informação do backend
// delete = utilizado para deletar uma informação do backend
// req.query = acessar query params (para filtros, get)
// req.params = acessar route params (para edição, delee, put)
// req.body = acessar corpo da requisição (para criação, ediçao, post)

app.use(express.json());
app.use(routes);

app.listen(3333);