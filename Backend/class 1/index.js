const http = require("http");
const fs  = require("fs");
const os = require("os");

//console.log(http);
//console.log(fs);


// //crete a server:
// const server = http.createServer((req,res) => {
//     if (req.url === "/") {
//         res.end("Hey welcome to my server");
//     }
//     else if(req.url == "/Home"){
//         res.end("Hey welcome to my home page");
//     }
//     else if(req.url == "/about"){
//         res.end("Hey welcome to my about page");
//     }
//     else if (req.url == "/contact") {
//         res.end("hey welcome to my contact page");
//     }
//     else{
//         res.end("404 page not found");
//     }
// });

const server = http.createServer((req,res)=>{
    switch (req.url) {
        case "/":
            res.end("Hey welcome to my server");
            break;
        case "/home":
            res.end("Hey welcome to my home");
            break;
        case "/about":
            res.end("Hey welcome to my about");
            break;
        case "/contact":
            res.end("Hey welcome to my contact");
            break;
        default:
            res.end("404 page not found");
            break;
    }
}); 

    
//Run start the server
const port = 3047;;
server.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});

