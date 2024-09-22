const { check, validationResult } = require('express-validator');

module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', function(req, res) {
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar',[
        check('titulo').not().isEmpty().withMessage('Título é obrigatório')
    ], function(req, res) {
        const noticia = req.body;

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).render('admin/form_add_noticia', {
                errors: errors.array(),
                noticia: noticia  
            })
        }

        const connection = app.config.dbConnection()
        const noticiasModel = app.app.models.noticiasModel

        noticiasModel.salvarNoticia(connection, noticia, function(error, result) {
            res.redirect('/noticias')
        })
        
    })
}