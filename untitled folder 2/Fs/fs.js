const fs = require('fs');
console.log("hello 1");

// sync -> blocking operations
// let result = fs.readFileSync('file.txt', "utf-8");

// console.log("princ");

// async -> non-blocking operations
fs.readFile("file.txt", "utf-8", (error, data) =>{
    if(error){
        throw error;
    }
    else{
        console.log(data);
    }
})
console.log("hello 2");