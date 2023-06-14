var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/qtdQuiz", function (req, res) {
    medidaController.buscarQtdQuiz(req, res);
});


module.exports = router;