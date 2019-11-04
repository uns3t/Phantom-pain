const mongoose=require("mongoose")

let userSchema=new mongoose.Schema({
    username:{type:String},
    pwd:{type:String},
})

module.exports=mongoose.model("user",userSchema)
