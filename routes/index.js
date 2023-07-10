const express=require("express");
const router=express.Router();
const Company=require("./Company");
const Task=require("./Task");
router.get("/",(req,res)=>{
    res.send("This is reserved");
})
router.use("/company",Company);
router.use("/task",Task);
module.exports=router;