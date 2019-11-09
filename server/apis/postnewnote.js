const notedb=require("../db/model/notedb")

const postnewnote=async(ctx)=>{
    let body=ctx.request.body
    Date.prototype.Format = function(fmt){
        var o = {
            "M+": this.getMonth()+1,
            "d+": this.getDate(),
            "H+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "S+": this.getMilliseconds()
        };
        if(/(y+)/.test(fmt)){
            fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length));
        }
        for(var k in o){
            if (new RegExp("(" + k +")").test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(String(o[k]).length)));
            }
        }
        return fmt;
    };

    let newnote=new notedb({
        note:body.note,
        title:body.title,
        username:ctx.state.userinfo.username,  //之后换为token
        time:new Date().Format("yyyy/MM/dd HH:mm:ss")
    })
    await newnote.save()

    ctx.body={
        code:0
    }
}

module.exports=postnewnote
