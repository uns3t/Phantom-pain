const notedb=require("../db/model/notedb")

const postnote=async(ctx)=>{
    let usernote=await notedb.find({username:ctx.state.userinfo.username})
    ctx.body={
        usernote:usernote
    }
}

module.exports=postnote
