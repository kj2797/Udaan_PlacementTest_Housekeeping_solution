const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const PersonSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String
    },
    profilepic:{
        type:String,
        default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpOI7bntRC8_CkKnG-G_goAufAgeZ7skhUN-JAdIr8nzu_OMqpA'
    },
    date:{
        type:Date,
        default: Date.now
    },
    resettoken: {
        type: String
    },
})

module.exports=Person=mongoose.model("myPerson",PersonSchema)
