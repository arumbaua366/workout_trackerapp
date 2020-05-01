const router = require("express").Router();

const gymself = require(`/api/workouts`, (req, res) => {
  gymself.create({}).then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  gymself.findByIdAndUpdate(params.id, { $push: { exercises: body } }).then(
    (dbWorkouts) => {
      res.json(dbWorkouts);
    }
  );
});

router.get("/api/workouts", (req, res) => {
  gymself.find().then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

router.get("/api/workouts/range", ({ query }, res) => {
  gymself.find().then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

module.exports = router;