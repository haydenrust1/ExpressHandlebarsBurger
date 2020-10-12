let express = require('express');
let burger = require('../models/burger');

let router = express.Router();

router.get('/', function (req, res) {
    burger.selectAll(function (result) {
        let handlebarsObj = {
            burgers: result
        };
        res.render('index', handlebarsObj);
    })
});

router.post('/api/burgers', function (req, res) {
    burger.insertBurger(['burger_name', 'devoured'],
        [req.body.burger_name, req.body.devoured],
        function (result) {

            res.json({ id: result.insertId });

        });
});

router.put('/api/burger/:id', function (req, res) {
    burger.updateBurger({ devoured: req.body.devoured },
        `id = ${req.params.id}`,
        function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});