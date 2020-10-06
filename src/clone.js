//浅拷贝
function clone(target){
    let newTarget = {}
    for(const key in target){
        newTarget[key] = target[key]
    }
    return newTarget
}
//深拷贝
function deepClone(target){
    if(typeof target === "object"){
        let newTarget = {}
        for(const key in target){
            newTarget[key] = deepClone(target[key])
        }
        return newTarget
    }else {
        return target
    }
}
//考虑数组
function deepClone(target){
    if(typeof target === "object"){
        
        let newTarget = Array.isArray(target)===true?[]:{}
        for(const key in target){
            newTarget[key]  = deepClone(target[key])
        }
        return newTarget
    }
    else {
        return target
    }
}