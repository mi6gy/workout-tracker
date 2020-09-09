const path = require("path")
// const router = requre("express").Router();


module.exports = function (app) {
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exersise.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "..public/stats.html"));
    });

    app.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname, "..public/index.html"));
    });

    // app.get("/exercise", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/exercise.html"));
    // });

    // app.get("/stats", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/stats.html"));
    // });
};