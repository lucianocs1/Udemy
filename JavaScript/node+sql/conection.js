const mysql = require("mysql")

const conection = mysql.createConnection({host: "localhost", user: "root", password: "123", database: "bank"});

conection.connect(function (err){
    if (err) {
        console.log(err)
    }else {
        console.log("Conectado!")
    }
    conection.query("SELECT * FROM clients", function(err, results, fields){
        if (err){
            console.log(err)
        } else {
            console.log(results);
        }
    })
});

module.exports = conection;
