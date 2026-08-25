class animal{
    eat(){
        console.log("eating");
    }
}

class Dog{
    bark(){
        console.log("barking");
    }
}

let charlie = new Dog();

console.log(charlie);
console.log(charlie.__proto__);
console.log(charlie.__proto__.__proto__);