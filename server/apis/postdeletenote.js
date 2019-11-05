const notedb=require("../db/model/notedb")

const postdeletenote=async(ctx)=>{
    await notedb.where({note:ctx.request.body.note}).remove()

    ctx.body={
        code:0
    }
}

module.exports=postdeletenote
