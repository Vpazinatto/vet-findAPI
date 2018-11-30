var mssql = require('mssql');

const connStr = 'SERVER=regulus.cotuca.unicamp.br;Database=BD17422;User Id=BD17422;Password=BD17422;'

mssql.connect(connStr).then(conn => { 
    global.conn = conn;
    console.log("Conectado ao banco");
 }).catch(err => console.log("Erro " + err));

module.exports = function(app) { 

    app.get('/usuarios', function(req, res) {
        var requestGetAll = new mssql.Request();   
        requestGetAll.query('SELECT * FROM usuario', function (err, results) {
            
            if (err) {
                res.status(500).send(err);
                return;
            }

            res.json(results);
        });
    });

    app.get('/usuarios/usuario/:id', function(req, res) {
        var id = req.params.id;
        console.log("Consultando usuário: " + id);

        var requestGetID = new mssql.Request();
        requestGetID.query('SELECT * FROM usuario WHERE id = ' + id, function(err, result) {
            if (err) {
                res.status(500).send(err);
                return;
            }

            res.json(result);
        });
    });

    app.delete('/usuarios/usuario/:id', function(req, res) {
        var id = req.params.id;
        console.log("Deletando usuario: " + id);

        var requestDelete = new mssql.Request();
        requestDelete.query('DELETE FROM usuario WHERE id = ' + id, function(err, result) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.send('Usuario excluido');
        });
    });

    app.put('/usuarios/usuario/:id', function(req, res) {

        var id = req.params.id;
        var usuario = req.body;

        usuario.id = id;

        var requestDelete = new mssql.Request();
        requestDelete.query("UPDATE FROM usuario SET CPF ='" + usuario.CPF + "' WHERE id = " + id, function(err, result) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(usuario);
        });
    });

    app.post('/usuarios/usuario', function(req, res) {
        var usuario = req.body;

        var requestPost = new mssql.Request();
        requestPost.query("INSERT INTO usuario VALUES ('" + usuario.nome + "', '" +  usuario.CPF + "')", function(err, result) {
            if (err) {
                console.log('Erro ao inserir no banco: ' + err);
                res.status(500).send(err);
            }
            
            usuario.id = result.insertId;
            res.location('/usuarios/usuario/' + usuario.id);

            var response = {
                dados_usuario: usuario
            }

            res.status(201).json(response);
        });
    });
}