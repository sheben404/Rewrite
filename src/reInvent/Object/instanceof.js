function myInstanceof(A,B){
    let a = A
    while(a){
        if(a === B.prototype){return true}
        a = a.__proto__
    }
    return false
}