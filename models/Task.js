const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const taskSchema=new Schema({
    taskName:{
        type:String,
        required:true
    },
    taskId:{
        type:String,
        required:true
    },
    taskDescription:{
        type:String,
        required:true
    },
    taskFrequency:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    },
})

module.exports=Task=mongoose.model("myTask",taskSchema)
