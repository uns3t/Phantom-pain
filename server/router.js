const Router=require('koa-router')
const postdeletenote=require('./apis/postdeletenote')
const postdeletequotation=require('./apis/postdeletequotation')
const postlogin=require('./apis/postlogin')
const postnewnote=require('./apis/postnewnote')
const postnewquotation=require('./apis/postnewquotation')
const postsignup=require('./apis/postsignup')
const postnote=require('./apis/postnote')
const getquotation=require('./apis/getquotation')

const router=new Router({
    prefix: '/api/v1'
})

router.post("/postdeletenote",postdeletenote)
router.post("/postdeletequotation",postdeletequotation)
router.post("/postlogin",postlogin)
router.post("/postnewnote",postnewnote)
router.post("/postnewquotation",postnewquotation)
router.post("/postsignup",postsignup)
router.post("/postnote",postnote)

router.get("/getquotation",getquotation)


module.exports=router



