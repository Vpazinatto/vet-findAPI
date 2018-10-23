module.exports = function(app) { 
    app.get('/veterinarios', function(req, res) {
        var con = app.database.connectionFactory();
        var veterinarioDAO = new app.database.daos.veterinarioDAO(con);

        veterinarioDAO.lista(function(response) {
            res.send(response.json());
        });
    });
}