var mysql = require("mysql");


var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"users"
});
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

module.exports = connection;
