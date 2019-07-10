const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const AssetSchema=new Schema({
    assetName:{
        type:String,
        required:true
    },
    assetId:{
        type:String,
        required:true
    },
    assetDescription:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    },
})

module.exports=Asset=mongoose.model("myAsset",AssetSchema)
