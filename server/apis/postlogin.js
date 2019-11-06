const userdb=require("../db/model/userdb")
const jwttools=require("../tools/token")

const postlogin=async(ctx)=>{
    let usertemp=await userdb.findOne({username:ctx.request.body.username,pwd:ctx.request.body.pwd})
    if(usertemp){
        let info={
            username:usertemp.username,
            isadmin:0
        }
        let token=jwttools.jwtencode(info)
        ctx.body={
            code:0,
            token:token
        }
        return
    }
}

module.exports=postlogin
