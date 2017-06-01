const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080 || 5000;


const server = express()
    .use(express.static(__dirname+"/page"))
    .use(bodyParser.json());


server.post("/", function(req,res){
  console.log(req.body)
})



server.listen(PORT, () => console.log("roger, we are online...."));
