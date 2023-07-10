const express=require("express");
const CompanySchema=require("../db/models/CompanySchema");
const TaskSchema=require("../db/models/TaskSchema");
const router=express.Router();
router.post("/create",async(req,res)=>{
    await CompanySchema.create({
        Name:req.body.Name,
        Details:req.body.Details,
        Image:req.body.Image,
        Link:req.body.Link,
        LastDate:req.body.LastDate
    }).then(()=>{
        res.send("added Company");
    })
})
router.get("/all",async(req,res)=>{
    await CompanySchema.find({}).then((out)=>{
        res.send(out);
    })
})
module.exports=router;