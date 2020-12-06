// 传统方式，分析 search
function queryToObj(){
    const res = {}
    const search = location.search.substr(1)
    search.split('&').forEach(paramStr =>{
        const arr = paramStr.split('=')
        const key = arr[0]
        const val = arr[1]
        res[key] = val
    })
    return res
}

// 使用 URLSearchParams
function queryToObj(){
    const res = {}
    const pList = new URLSearchParams(location.search)
    pList.forEach((val,key)=>{
        res[key] = val
    })
    return res
}