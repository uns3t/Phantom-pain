const quotationdb=require("../db/model/quotationdb")


const postdeletequotation=async(ctx)=>{
    id=ctx.request.body._id
    await quotationdb.where({_id:id}).remove()

    ctx.body={
        code:0
    }

}

module.exports=postdeletequotation
