const mongoose = require ('mongoose');
const {Schema} = mongoose;

const tasksSchema = new Schema({
    employeeId: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    finished: Boolean,
    date: Date,
    img: {
        type: String,
        default: null
    }
})
const TasksModel = mongoose.model('tasks',tasksSchema);
module.exports=TasksModel;