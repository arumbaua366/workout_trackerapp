// require mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Mongoose schema
const workout = new Schema({
  // date is inputted automatically
  day: {
    type: Date,
    default: Date.now,
  },
  
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "required",
      },
      name: {
        type: String,
        trim: true,
        required: "required",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "required",
      },
      distance: {
        type: Number,
      },
    },
  ],
});

//creating an instance of a model https://mongoosejs.com/docs/models.html
const Workout = mongoose.model(`Workout`, workout);

// export
module.exports = Workout;