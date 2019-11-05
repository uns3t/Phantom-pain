const quotationdb=require("../db/model/quotationdb")


const postdeletequotation=async(ctx)=>{
    quotationtemp=ctx.request.body.quotation
    await quotationdb.where({quotation:quotationtemp}).remove()

    ctx.body={
        code:0
    }

}

module.exports=postdeletequotation
