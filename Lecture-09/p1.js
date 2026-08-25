let p1=new Promise((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        resolve("Data aa gyaa");
    },2000);
});
p1.then((data)=>{
    console.log("Consumed Promise");
    console.log(data);
})
.catch((error)=>{
    console.log("Sorry, data nhi aya");
    console.log(error);
})
.finally(()=>{
    console.log("Thank you for using our services");
});