const mongoose=require("mongoose");
const TaskSchema=new mongoose.Schema({
    Title:String, 
    Details:String,
    Link:String,
    LastDate:String
})
module.exports=mongoose.model("TaskSchema",TaskSchema);