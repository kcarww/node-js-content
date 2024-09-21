const noticiasModel = require('../models/noticiasModel.js'); // Importe o modelo via require

module.exports =  function(app) {
    app.get('/noticia', (req, res) => {
        noticiasModel.getNoticias(function(error, result) {
            if (error) {
                res.status(500).send('Erro ao buscar a notícia.');
            } else {
                res.render('noticia/noticia', { noticia: result });
            }
        });
    });
}
