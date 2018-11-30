function usuarioDAO(connection) {
    this._connection = connection;
}

usuarioDAO.prototype.lista = function(callback) {
    this._connection.query('SELECT * FROM usuario', callback);
}

usuarioDAO.prototype.salva = function(usuario, callback) {
    this._connection.query("INSERT INTO usuario VALUES ('" + usuario.nome + "', '" +  usuario.CPF + "')", callback);
}

usuarioDAO.prototype.buscaPorID = function(id, callback) {
    
}