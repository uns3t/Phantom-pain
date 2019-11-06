const mongoose=require("mongoose")

let noteSchema=new mongoose.Schema({
    username:{type:String},
    title:{type:String},
    note:{type:String},
    time:{type:String},
})

module.exports=mongoose.model("note",noteSchema)
