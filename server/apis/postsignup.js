const userdb=require("../db/model/userdb")


const postsignup=async(ctx)=>{
    let usertemp=new userdb({
        username:ctx.request.body.username,
        pwd:ctx.request.body.pwd,
    })
    await usertemp.save()
    ctx.body={
        code:0
    }
}

module.exports=postsignup
