//双循环
function unique(arr){
    let res = [arr[0]]
    for(let i = 1;i<arr.length;i++){
        let flag = true
        for(let j = 0;j<res.length;j++){
            if(arr[i]===res[j]){
                flag = false
                break
            }
        }
        if(flag){
            res.push(arr[i])
        }
    }
    return res
}

//indexOf去重1
function unique(arr){
    let res = []
    for(let i = 0;i<arr.length;i++){
        if(res.indexOf(arr[i]) === -1){
            res.push(arr[i])
        }
    }
    return res
}

//indexOf去重2 
function unique(arr){
    return Array.prototype.filter.call(arr,function(item,index){
        return arr.indexOf(item) === index
    })
}

//相邻元素去重
function unique(arr){
    arr = arr.sort()
    let res = []
    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== arr[i-1])
            res.push(arr[i])
    }
    return res
}

//使用set
function unique(arr){
    return [...new Set(arr)]
    //return Array.from(new Set(arr))
}

//利用对象属性去重
function unique(arr){
    let res = []
    let obj = {}
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            res.push(arr[i])
            obj[arr[i]] = 1
        }else{
            obj[arr[i]]++
        }
    }
    return res
}