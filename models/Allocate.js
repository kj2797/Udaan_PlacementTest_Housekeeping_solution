const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const allocateSchema=new Schema({
    assetId:{
        type:String,
        required:true
    },
    taskId:{
        type:String,
        required:true
    },
    workerId:{
        type:String,
        required:true
    },
    dateAllocation:{
        type:Date,
        default: Date.now
    },
    dateCompletion:{
        type:String
    },
})

module.exports=Allocate=mongoose.model("myAllocate",allocateSchema)
