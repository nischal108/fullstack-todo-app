const mongoose = require('mongoose');
const { boolean } = require('zod');

try {
    mongoose.connect('');
} catch (error) {
    console.log("error connecting to database");
}

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        default: false,
        type: Boolean
    }
});

const todoModel = mongoose.model("todos", todoSchema);

module.exports = {
    todoModel
};
