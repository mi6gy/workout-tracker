const Workouts = require("../models/workoutmodel")
const { Workout } = require("../public/public");
const db = require("../public");

module.exports = function (app) {

    app.get("api/workouts", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            });
    });
};

app.post("api/workouts", async (req, res) => {
    try {
        const response = await db.Workout.create({ type: "workout" })
        res.json(response)
    }
    catch (err) {
        console.log("problem with post", err)
    }
});
