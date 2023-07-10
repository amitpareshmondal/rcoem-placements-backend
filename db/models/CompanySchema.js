const mongoose=require("mongoose");
const CompanySchema=new mongoose.Schema({
    Name:String, 
    Details:String,
    Link:String,
    Image:String,
    LastDate:String
})
module.exports=mongoose.model("CompanySchema",CompanySchema);