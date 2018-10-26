/*function VeterinarioDAO(connection) {
    this._connection = connection;
};

VeterinarioDAO.prototype.lista = function(callback) {
    this._connection.query('select * from veterinario', callback);
}

VeterinarioDAO.prototype.salva = function(veterinario, callback) {
    this._connection.query('INSERT INTO veterinario SET ?', veterinario, callback);
}

VeterinarioDAO.prototype.atualiza = function(veterinario, callback) {
    this._connection.query('UPDATE veterinario SET nome = ? where id = ?', [veterinario.nome, veterinario.id], callback);
}

VeterinarioDAO.prototype.buscaPorId = function(id, callback) {
    this._connection.query('select * from veterinario where id = ?', id, callback);
}

module.exports = function() {
    return VeterinarioDAO;
};*/