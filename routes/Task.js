const express=require("express");
const CompanySchema=require("../db/models/CompanySchema");
const TaskSchema=require("../db/models/TaskSchema");
const router=express.Router();
router.post("/create",async(req,res)=>{
    await TaskSchema.create({
        Title:req.body.Title,
        Details:req.body.Details,
        LastDate:req.body.LastDate,
        Link:req.body.Link
    }).then(()=>{
        res.send("added Task");
    })
})
router.get("/all",async(req,res)=>{
    await TaskSchema.find({
    }).then((out)=>{
        res.send(out);
    })
})
module.exports=router;