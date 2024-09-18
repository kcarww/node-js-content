// Substitui 'require' por 'import'
import app from './config/server.js';

// Importa as rotas usando ESModules
import rotaNoticias from './app/routes/noticias.js';
import rotaHome from './app/routes/home.js';
import rotaFormularioInclusaoNoticia from './app/routes/formulario_inclusao_noticia.js';

// Chama as funções de rotas passando 'app' como parâmetro
rotaNoticias(app);
rotaHome(app);
rotaFormularioInclusaoNoticia(app);

// Inicia o servidor com arrow function
app.listen(3000, () => {
    console.log('running on port 3000');
});
