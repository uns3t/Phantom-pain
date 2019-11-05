const notedb=require("../db/model/notedb")

const postnote=async(ctx)=>{
    let usernote=notedb.find({username:ctx.request.body.username})
    ctx.body={
        usernote:usernote
    }
}

module.exports=postnote
