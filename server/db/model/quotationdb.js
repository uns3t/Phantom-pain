const mongoose=require("mongoose")

let quotationSchema=new mongoose.Schema({
    quotation:{type:String},
})

module.exports=mongoose.model("quotation",quotationSchema)
