var User = require("../../models/users");
var bcrypt = require("bcrypt");

$("#submit").on("click", function (event) {
    event.preventDefault();
    app.post("/user", function (req, res, next) {
        bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
                return res.status(500).json
            } else {
                let user = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    cellphone: req.body.cellNum,
                    unitNum: req.body.unitNum,
                    password: hash
                });
                user.create()
            }
        });
    });
});