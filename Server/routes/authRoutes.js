import express from 'express'

const router=express.Router()

router.get('/',(req,res)=>{
    console.log("Server is on")
    res.send("Server is running successfully")
})

export default router