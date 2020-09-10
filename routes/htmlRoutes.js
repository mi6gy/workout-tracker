const path = require("path")
const router = require("express").Router();


//module.exports = function (app) {
    router.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    router.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    router.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // app.get("/exercise", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/exercise.html"));
    // });

    // app.get("/stats", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/stats.html"));
    // });
//};

module.exports = router;