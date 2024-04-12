// INCLUINDO A DEPENDENCIA MYSQL
const mysql = require('mysql2');



// CRIA A CONECÇÃO COM O BANCO 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja_veiculos'
});

connection.connect(function (err) {
    console.log("Boaaaaaaaaa")
})

connection.query("SELECT usuario FROM loja_veiculos.usuarios WHERE usuario = 'admin';", function (err, Resultado) {
    if (!err) {
        console.log("Resultado:", Resultado);
    } else {
        console.log('Erro: Consulta não realizada com sucesso!');
    }
});
