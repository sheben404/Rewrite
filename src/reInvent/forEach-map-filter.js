//forEach
Array.prototype.forEach = function(fn){
    let arr = this

    if(typeof fn!== 'function'){
        throw '参数必须为函数'
    }
    if(!Array.isArray(arr)){
        throw '只能对数组使用forEach方法'
    }

    for(let index = 0;index<arr.length;index++){
        fn(arr[index],index,arr)
    }
}

//map
Array.prototype.map = function(fn){
    let result = []
    let arr = this

    if(typeof fn!== 'function'){
        throw '参数必须为函数'
    }
    if(!Array.isArray(arr)){
        throw '只能对数组使用map方法'
    }
    
    for(let index = 0;index<arr.length;index++){
        result.push(fn(arr[index],index,arr))
    }
    return result
}

//filter
Array.prototype.filter = function(fn){
    let arr = this
    let result = []

    if(typeof fn !== 'function'){
        throw '参数必须为函数'
    }
    if(!Array.isArray(arr)){
        throw '只能对数组使用filter方法'
    }

    for(let index = 0;index<arr.length;index++){
        let isOk = fn(arr[index],index,arr)
        if(isOk){
            result.push(arr[index])
        }
    }
    return result
}