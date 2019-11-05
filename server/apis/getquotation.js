const quotationdb=require("../db/model/quotationdb")

const getquotaion=async(ctx)=>{
    let quotations=await quotationdb.find()
    let quotationidx=Math.ceil(Math.random()*(quotations.length-1))
    console.log(quotations[quotationidx])
    ctx.body={
        quotation:quotations[quotationidx]
    }

}

module.exports=getquotaion
