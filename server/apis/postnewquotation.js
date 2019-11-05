const quotationdb=require("../db/model/quotationdb")

const postnewquotation=async(ctx)=>{
    let newquotation=new quotationdb({
        quotation:ctx.request.body.quotation
    })
    await newquotation.save()
    ctx.body={
        code:0
    }
}

module.exports=postnewquotation
