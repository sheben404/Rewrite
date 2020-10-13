function fn(){
    return new Promise((resolve,reject)=>{
        //成功调用resolve
        //失败调用reject
    })
}
fn.then(success,fail).then(success,fail)

Promise.all([promise1,promise2]).then(success,fail)
Promise.race([promise1,promise2]).then(success,fail)