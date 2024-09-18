import express from 'express'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')



export default app