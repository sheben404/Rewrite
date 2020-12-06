// 前置知识 [].concat(1,2,3,4,[5,6],7) 的结果是 [1,2,3,4,5,6,7]
function flat(arr){
    const isDeep = arr.some(item => item instanceof Array)
    if(!isDeep) {return arr}    
    const res = [].concat(...arr)
    return flat(res)
}
const res = flat([1,2,3,[4,5,[6,7]],8])
console.log(res)