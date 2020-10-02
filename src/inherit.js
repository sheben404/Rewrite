//不使用class
function A(name){
    this.name = name
}
A.prototype.sayName = function(){console.log(this.name)}

function B(name,age){
    A.call(this,name)
    this.age = age
}

function tem (){}
tem.prototype = A.prototype
B.prototype = new tem()

B.prototype.constructor = B
B.prototype.sayAge = function(){}

let b = new B

//使用class
class C {
    constructor(){
        this.name = name
    }
    sayName(){console.log(this.name)}
}
class D extends A {
    constructor(){
        super(name)
        this.age = age
    }
    sayAge(){console.log(this.age)}
}

