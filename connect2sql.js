// config for your database
var config = {
    user: 'database',
    password: 'mypassword',
    server: 'localhost', 
    database: 'bdd.txt'
};

// connect to your database
sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query('select * from Student', function (err, recordset) {

        if (err) console.log(err)

        // send records as a response
        res.send(recordset);

    });
});
