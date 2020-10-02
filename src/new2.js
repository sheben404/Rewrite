// new
function new2(func){
    let res = {}
    if(func.prototype !== null){
        res._proto_ = func.prototype
    }
    let ret = func.apply(res,Array.prototype.slice.call(arguments,1))
    if ((typeof ret === "object" || typeof ret === 'function') && ret !== null){
        return ret
    }
    return res
}

//测试 new2

let obj1 = JSON.stringify(new Object)
let obj2 = JSON.stringify(new2(Object))
console.log(obj1 === obj2)