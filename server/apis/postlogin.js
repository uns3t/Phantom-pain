const userdb=require("../db/model/userdb")


const postlogin=async(ctx)=>{
    let usertemp=await userdb.find({username:ctx.request.body.username,pwd:ctx.request.body.pwd})
    if(usertemp.length>0){
        ctx.body={
            code:0
        }
        return
    }
}

module.exports=postlogin
