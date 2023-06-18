const connection = require("../db/config");

module.exports = {
    getAllUsers: (req, res) => {
        connection.query("SELECT * FROM users", (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error retrieving users");
            } else {
                res.json(results);
            }
        });
    },

    deleteUser: (req, res) => {
        const id = req.params.id;
        connection.query("DELETE FROM users where id=?", [id], (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send("error ");
            } else {
                res.send(200).send("user deleted");
            }
        });
    }
};