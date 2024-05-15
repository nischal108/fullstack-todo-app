const mongoose = require('mongoose');
const { boolean } = require('zod');

try {
    mongoose.connect('mongodb+srv://nishchalb21:NB5TbGJNdghPRr5E@cluster0.e9ebmpn.mongodb.net/fullstacktodoapp');
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
