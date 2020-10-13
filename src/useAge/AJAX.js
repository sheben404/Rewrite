//简易版
let request = XMLHttpRequest()
request.open('GET', 'http://google.com', true)
request.onload = ()=>{console.log(responseText)}
request.send()

//完整版
let request = XMLHttpRequest()
request.open('GET', 'http://google.com', true)
request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText)
    }
}
request.send()