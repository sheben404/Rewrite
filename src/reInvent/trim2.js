function trim2(str){
    let num = 0
    for(let i = 0;i<str.length;i++){
        if(str[i]===' ')
            num++
        else break
    }
    for(let j = 0;j<num;j++){
        str = str.replace(' ','')
    }
    let newStr = str.split('').reverse().join('')
    num = 0
    for(let i = 0;i<newStr.length;i++){
        if(newStr[i]===' ')
            num++
        else break
    }
    for(let j = 0;j<num;j++){
        newStr = newStr.replace(' ','')
    }
    return newStr.split('').reverse().join('')
}

//使用正则表达式
function _trim(string){
    return string.replace(/^\s+|\s+$/g, '')
}