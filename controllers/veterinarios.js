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
            console.log("Error: " + err);
            return;
        }
        
        console.log("Funcionou!");

    });

    app.get('/veterinarios', function(req, res) {
        var requestGetAll = new mssql.Request();   
        requestGetAll.query('SELECT * FROM veterinario', function (erro, veterinarios) {
            
            if (erro) {
                console.log(erro);
                return;
            }

            res.send(veterinarios.json());
        });
    });

    app.get('/veterinarios/veterinario/:id', function(req, res) {
        var id = req.params.id;
        console.log("Consultando pagamento: " + id);

        var requestGetID = new mssql.Request();
        requestGetID.query('SELECT * FROM veterinario WHERE id = ' + id, function(err, veterinario) {
            if (erro) {
                console.log(erro);
                return;
            }

            res.send(veterinario.json());
        });


    });
}