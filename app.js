const express=require("express")
const app=express();
const env=require("dotenv").config();
const PORT=process.env.PORT || 8080;

app.use(("/"),(req,res)=>{
res.json({message:"hello world"})
})
//this is commnet form dev branch
//you have to check this code
// now push this to github
app.use(("/test",(req,res)=>{
res.json({message:"This is a test"})

}))

app.use(("/abc",(req,res)=>{
res.json({message:"This is a abc"})

}))


app.use(("/test123",(req,res)=>{
res.json({message:"This is a test123"})
}))

app.listen(PORT,()=>{
console.log(`Server is running on PORT ${PORT}`)
})