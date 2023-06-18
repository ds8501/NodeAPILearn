const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'students',

});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to database");
    }
});


module.exports = connection