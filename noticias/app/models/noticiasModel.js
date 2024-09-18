import conn from "../../config/db-connection.js"

const noticiasModel = {
    getNoticias(callback) {
        conn.query('SELECT * FROM noticias', callback);
    },

    getNoticia(callback) {
        conn.query('SELECT * FROM noticias WHERE id_noticia = 1', callback)
    }
};

export default noticiasModel
