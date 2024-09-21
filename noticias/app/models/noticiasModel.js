
module.exports = function () {
    this.getNoticias = function(connection, callback) {
        connection.query('select * from noticias', callback)
    }

    this.getNoticia = function(connection, id, callback) {
        connection.query('select * from noticias where id = ?', [id], callback)
    }

    this.salvarNoticia = function(connection, noticia, callback) {
        connection.query('insert into noticias set ?', noticia, callback)
    }

    return this
}




