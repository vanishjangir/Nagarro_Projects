const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");

})

app.post("/",function(req,res){
  var weightInGm=req.body.weight;
  res.send("<h1>Weight in Kgs "+weightInGm/1000);
})

app.listen(3000,function(){
  console.log("Server started at port 3000");
})
