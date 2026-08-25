const http=require("http");


let server=http.createServer((req,res)=>{
    console.log(req);

    //console.log("hi inside server...computer");
    res.end("mirai page sent");
});

server.listen(3000);