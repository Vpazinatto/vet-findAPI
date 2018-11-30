var mssql = require('mssql');

var config = {
    user: 'BD17422',
    password: 'BD17422',
    server: 'regulus.cotuca.unicamp.br',
    database: 'BD17422'
};

var con = mssql.connect(config, function(err) {
    if (err) {
        console.log("Error: " + err);
        return;
    }
    
    console.log("Conectado ao banco");
});