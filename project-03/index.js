const express = require('express');
const app = express();

// Lista para armazenar os alunos
let alunos = [];

// Configurações
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index', { alunos, title: 'Lista de Alunos' });
});

app.get('/alunos/new', (req, res) => {
    res.render('form', { aluno: {}, action: '/alunos', title: 'Adicionar Aluno' });
});


// Adicionar aluno
app.post('/alunos', (req, res) => {
    const { nome, idade, curso, nota } = req.body;
    alunos.push({ id: alunos.length + 1, nome, idade, curso, nota });
    res.redirect('/');
});

// Editar aluno
app.get('/alunos/edit/:id', (req, res) => {
    const aluno = alunos.find(a => a.id == req.params.id);
    res.render('form', { aluno, action: `/alunos/${aluno.id}/edit` });
});

// Atualizar aluno
app.post('/alunos/:id/edit', (req, res) => {
    const { nome, idade, curso, nota } = req.body;
    const aluno = alunos.find(a => a.id == req.params.id);
    aluno.nome = nome;
    aluno.idade = idade;
    aluno.curso = curso;
    aluno.nota = nota;
    res.redirect('/');
});

// Excluir aluno
app.post('/alunos/:id/delete', (req, res) => {
    alunos = alunos.filter(a => a.id != req.params.id);
    res.redirect('/');
});

// Iniciar servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
