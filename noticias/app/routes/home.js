module.exports = function(app) {
    app.get('/', function(req, res) {
        // usamos o método send() por estar trabalhando com Express
        // mas ao instalar e setar o EJS como o view engine, passamos a usar o render()
        res.render("home/index")
    });
}