module.exports = function(app) { 
    app.get('/veterinarios', function(req, res) {
        //var con = app.database.connectionFactory();

        var mssql = require('mssql');
        
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

        var request = new mssql.Request();
        
            request.query('SELECT * FROM veterinario', function (erro, veterinarios) {
                
                if (erro) { 
                    console.log(erro);
                    return;
                }
    
                res.send(veterinarios);
            });
    });
}