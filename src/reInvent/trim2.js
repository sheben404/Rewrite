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

//注意substr的第二个参数是截去的字符串的长度
function trim1(str){
    let head = 0
    let foot = str.length
    for(let i = 0;i<str.length;i++){
        if(str[i] === ' ')head++
        else break
    }
    for(let j = str.length-1;j>=0;j--){
        if(str[j] === ' ')foot--
        else break
    }
    return str.substr(head,foot-head)
}

//使用正则表达式
function _trim(string){
    return string.replace(/^\s+|\s+$/g, '')
}