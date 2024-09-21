module.exports = function(app) {

    app.get('/noticias', function(req, res) {

    	var connection = app.config.dbConnection(); //dbConnection();

        // a funcao query especa 2 params: um SQL e uma funcao de callback (a funcao de callback espera dois params: erro e resultado)
        connection.query('select * from noticias', function(error, result) {
            //res.send(result); // mandar o resultado cru para a página

            // renderizar uma página enviando também o resultado (dados)
            res.render("noticias/noticias", {
                noticias: result
            });
        });

        //res.render("noticias/noticias")
    });
}