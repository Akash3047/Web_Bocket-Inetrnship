const express =  require("express");
const fs  = require("fs");

//setup server:
const app = express();
app.use(express.json());

app.get("/",(req,res) =>{
    res.json({msg:"Welcome to my server"});
    res.end("Welcome to my server");
});

app.get("/Home",(req,res) =>{
    res.json({msg:"Welcome to my home page"});
});

app.get("/About",(req,res) =>{
    res.json({msg:"Welcome to my about page"});
});

app.get("/write",(req,res) =>{
    const myName = "Akash Kar";
    fs.writeFileSync("logs.txt",myName);
    res.json({msg:"Sucessfully created"});
});


app.get("/read",(req,res) =>{
    const data = fs.readFileSync("./logs.txt","utf-8");
});

app.get("/append",(req,res) =>{
    const sentence = "I am SDE-1";
    fs.appendFileSync("logs.txt",sentence);
    req.json({msg: "Succesfully created"});
});



//start the server:
const port = process.env.port || 3047;;
app.listen(port,() =>{
    console.log(`Server is started on port ${port}`);
});

