import mysql from 'mysql'

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portal_noticias'
})

export default conn