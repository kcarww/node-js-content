module.exports = function (app) {
    app.get('/noticia/:id', (req, res) => {
        const connection = app.config.dbConnection()
        const noticiasModel = new app.app.models.noticiasModel
        const id = req.params.id

        noticiasModel.getNoticia(connection, id, (error, result) => {
            res.render('noticias/noticia', { noticia: result[0] })
        })
    })

}
