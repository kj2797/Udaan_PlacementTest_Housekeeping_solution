const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const WorkerSchema=new Schema({
    workerName:{
        type:String,
        required:true
    },
    workerId:{
        type:String,
        required:true
    },
    skills:{
        type:[String]
    },
    tasks:{
        type:[String]
    },
    date:{
        type:Date,
        default: Date.now
    },
})

module.exports=Worker=mongoose.model("myWorker",WorkerSchema)
