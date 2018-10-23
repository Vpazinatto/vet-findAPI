var mssql = require('mssql');

function createDBConnection() {
    return mssql.connect({
        user: 'BD17422',
        password: 'BD17422',
        server: 'regulus.cotuca.unicamp.br',
        database: 'BD17422'
    });
}

module.exports = function () {
    return createDBConnection;
}