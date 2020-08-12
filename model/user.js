const mongoose = require('mongoose');
// 创建集合规则
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age : {
        type: Number,
        min: 10,
        max : 25
    },
    sex: {
        type: String
    },
    email: String,
    hobbies: [ String ],
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now
    }
})

// 使用集合规则创建学生集合
const Student = mongoose.model('Student',studentSchema);

// 开放集合，方便其他文件使用
module.exports = Student;