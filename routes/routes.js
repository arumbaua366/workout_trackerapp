const router = require("express").Router();

// Using Gyming instead of Workout
const Gyming = require(`../models/index.js`)


//creating my workout
router.post(`/api/workouts`, (req, res) => {
    Gyming.create({})
    .then(dbWorkouts => {
        res.json(dbWorkouts)
    })
})

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Gyming.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      )
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
  });
  
  router.get("/api/workouts", (req, res) => {
    Gyming.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
  });
  
  //finding all workouts for the stats page
  router.get("/api/workouts/range", ({ query }, res) => {
    Gyming.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts);
      })

  });
  

module.exports = router