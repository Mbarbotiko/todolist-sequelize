var db = require("../models");
module.exports = function (app) {
    app.get("/api/todos", function (req, res) {
        db.to_do.findAll({}).then(function (todosdata) {
            res.json(todosdata);
        });

    });

    app.post("/api/todos", function (req, res) {
        db.to_do.create({
            todoitem: req.body.todoitem,
            complete: req.body.complete
        }).then(function (todosdata) {
            res.json(todosdata);
        })

            .catch(function (err) {
                res.json(err)
            });
    });

    app.delete("/api/todos/:id", function (req, res) {
        db.to_do.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (todosdata) {
            res.json(todosdata);
        });
    });

    app.put("/api/todos", function (req, res) {
        db.to_do, update({
            todoitem: req.body.todoitem,
            complete: req.body.complete
        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (todosdata) {
                res.json(todosdata);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

};