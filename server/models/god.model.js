const mongoose = require("mongoose");

const GodSchema = new mongoose.Schema({
    god: {
        type: String,
        required: [true, "God Name is required"],
        minLength: [2, "God Name must have at least 2 characters"],
    },
    calories: {
        type: Number,
        required: [true, "Calories are required"],
    },

})

module.exports = mongoose.model("God", GodSchema); 