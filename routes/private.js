const route=require('express').Router()

route.get('/',(req,res)=>{
    res.send("Only visible to logged in users")
})

exports=module.exports=route