const quotationdb=require("../db/model/quotationdb.js")

const getallquotaion=async(ctx)=>{
    let quotations=await quotationdb.find()

    ctx.body={
        quotation:quotations
    }

}

module.exports=getallquotaion
