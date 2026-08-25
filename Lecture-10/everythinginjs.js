let a =90;
let str="vikas";
let present =true;

function sum(){
    console.log("hi");

};

console.log(sum.__proto__.__proto__.__proto__);

let a =20;
a.__proto.myfeature=()=>{
    console.log("mera inbuilt feature add ho gya Number prototype me")
}
console.log(Number.prototype);
let b=89;
b.__proto__.myfeature();

Number.prototype.toFixed=(x)=>{
    console.log("nhi karunga");
    return x*x;
};
console.log(a.toFixed(2));