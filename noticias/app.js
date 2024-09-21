const app = require('./config/server');
// const rotaNoticias = require('./app/routes/noticias');
// const rotaHome = require('./app/routes/home');
// const rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
// const rotaNoticia = require('./app/routes/noticia');


// rotaNoticias(app);
// rotaHome(app);
// rotaFormularioInclusaoNoticia(app);
// rotaNoticia(app);

// Inicia o servidor com arrow function
app.listen(3000, () => {
    console.log('running on port 3000');
});
