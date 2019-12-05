// définition de la base de données
var bdd = {
    user: 'database',
    password: 'mypassword',
    server: 'localhost', 
    database: 'bdd.txt'
};

// connection à la database
sql.connect(bdd, function (err) {

    if (err) console.log(err);

    // création d'un objet requête
    var request = new sql.Request();

    // Requête à la base de données
    request.query('select nom from bdd', function (err, recordset) {

        if (err) console.log(err)

        // affichage de la réponse
        res.send(recordset);

    });
});
