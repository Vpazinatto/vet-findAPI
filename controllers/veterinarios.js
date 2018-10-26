var mssql = require('mssql');

module.exports = function(app) { 
 
    var config = {
        user: 'BD17422',
        password: 'BD17422',
        server: 'regulus.cotuca.unicamp.br',
        database: 'BD17422'
    };
    
    mssql.connect(config, function(err) {
        if (err) {
            console.log("erro: " + err);
            return;
        }
        
        console.log("Funcionou!");

    });

    app.get('/veterinarios', function(req, res) {
        var requestGetAll = new mssql.Request();   
        requestGetAll.query('SELECT * FROM veterinario', function (err, veterinarios) {
            
            if (err) {
                res.status(500).send(err);
                return;
            }

            res.json(veterinarios);
        });
    });

    app.get('/veterinarios/veterinario/:id', function(req, res) {
        var id = req.params.id;
        console.log("Consultando pagamento: " + id);

        var requestGetID = new mssql.Request();
        requestGetID.query('SELECT * FROM veterinario WHERE id = ' + id, function(err, veterinario) {
            if (err) {
                res.status(500).send(err);
                return;
            }

            res.json(veterinario);
        });
    });

    app.delete('/veterinarios/veterinario/:id', function(req, res) {
        var id = req.params.id;
        console.log("Deletando pagamento: " + id);

        var requestDelete = new mssql.Request();
        requestDelete.query('DELETE FROM veterinario WHERE id = ' + id, function(err, veterinario) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.send('Veterinario excluido');
        });
    });

    app.post('/veterinarios/veterinario', function(req, res) {
        var veterinario = req.body;

        var requestPost = new mssql.Request();
        requestPost.query("INSERT INTO veterinario VALUES ('" + veterinario.nome + "', '" +  veterinario.CPF + "')", function(err, result) {
            if (err) {
                console.log('Erro ao inserir no banco: ' + err);
                res.status(500).send(err);
            }
            
            veterinario.id = result.insertId;
            res.location('/veterinarios/veterinario/' + veterinario.id);

            var response = {
                dados_veterinario: veterinario
            }

            res.status(201).json(response);
        });
    });


}