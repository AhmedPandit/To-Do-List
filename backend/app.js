const express = require("express");
const bodyParser=require("body-parser")
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv=require("dotenv");
var ITEMRouter = require("./routes/route.js");


const app=express();
app.use(cors());
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));


app.use("/todos", ITEMRouter);

const CONNECTION_URL="mongodb+srv://Ahmedfinal:mongoahmed@cluster0.z4cri4u.mongodb.net/TodoList";
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log (`server running on ${PORT}`)))
.catch((error)=>console.log(error.message));

module.exports = app;