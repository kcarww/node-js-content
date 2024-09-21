// trazer o módulo de MySQL
const mysql = require('mysql');


// Função que cria e retorna a conexão MySQL
const connMySQL = function() {
    console.log('Conexão com o BD estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
};

// Exporta a função connMySQL diretamente
module.exports = function () {
    return connMySQL
}
