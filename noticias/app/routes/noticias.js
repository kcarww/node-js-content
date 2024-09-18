import conn from "../../config/db-connection.js"

export default function(app) {
    
    app.get('/noticias', function(req, res){
        
        conn.query('SELECT * FROM noticias', function(error, result){
            res.render('noticias/noticias', {noticias: result})
        })
    })
}
