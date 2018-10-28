function veterinarioDAO(connection) {
    this._connection = connection;
}

veterinarioDAO.prototype.lista = function(callback) {
    this._connection.query('SELECT * FROM veterinario', callback);
}

veterinarioDAO.prototype.salva = function(veterinario, callback) {
    this._connection.query("INSERT INTO veterinario VALUES ('" + veterinario.nome + "', '" +  veterinario.CPF + "')", callback);
}

veterinarioDAO.prototype.buscaPorID = function(id, callback) {
    
}