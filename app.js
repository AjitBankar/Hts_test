const express = require("express");
const bodyParser = require('body-parser');

const { initDb } = require("./config/db");
const {user} = require("./schema/user")

initDb();
this.userModel = user;
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
  extended: true,
 
}));

app.get("/", (req,res)=>{
  res.send("Welcome");
})

app.post("/signup", async(req, res) => {
     const userData = await  this.userModel.findOne({email:req.body.email}).lean();
     
     if(!userData){
        const data = await new this.userModel(req.body).save();
        res.status(201).json({
            status: 'success',
            data: req.body,
          })       
        
     }else{
        res.status(409).json({
            status: 'exist',
            data: req.body,
          })
     }
  });

  app.post("/login", async(req, res) => {
    const { email, password } = req.body;
    const userData = await  this.userModel.findOne({email, password}).lean();
    
    if(!userData){
        res.status(404).json({
            status: 'Bad Creditial'
          })
    }else{
        res.status(200).json({
            status: 'success',
            data: req.body,
          })
    }
 });

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
