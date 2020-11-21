//Promise2,未实现级联和catch
class Promise2{
    succeed = null
    fail = null
    state = 'pending'

    constructor(fn){
        fn(this.resolve.bind(this),this.reject.bind(this))
    }

    resolve(result){
        setTimeout(()=>{
            this.state = 'fulfilled'
            this.succeed(result)
        })
    }
    reject(reason){
        setTimeout(()=>{
            this.state = 'rejected'
            this.fail(reason)
        })
    }

    then(succeed,fail){
        this.succeed = succeed
        this.fail = fail
    }
}

//Promise2.all
Promise2.all = function(arrP){
    let list = []
    let len = 0
    let hasErr = false
    return new Promise2((resolve,reject)=>{
        for(let i = 0;i<arrP.length;i++){
            arrP[i].then(data =>{
                list[i] = data
                len++
                !hasError && len === arrP.length && resolve(list)
            },error => {
                !hasErr && reject(error)
                hasErr = true
            })
        }
    })
}
//Promise2.race
Promise2.race = function(arrP){
    let hasValue = false
    let hasError = false
    return new Promise2((resolve,reject)=>{
        for(let i = 0;i<arrP.length;i++){
            arrP[i].then(data => {
                !hasValue && !hasError && resolve(data)
                hasValue = true
            },error => {
                !hasValue && !hasError && reject(error)
                hasError = true
            })
        }
    })
}

//测试代码
new Promise2((resolve, reject) => {
  let [val, time] = [Math.random(), Math.random() * 1000];
  setTimeout(() => {
    val > 0.2 ? resolve(val) : reject(val);
  }, time);
}).then(
  (val) => console.log("promise 测试:", val),
  (err) => console.error("promise 测试:" + err)
);

const getPList = () => {
  let arrP = [];
  for (let i = 0; i < 10; i++) {
    arrP[i] = new Promise2((resolve, reject) => {
      let [v, t] = [Math.random(), Math.random() * 1000];
      setTimeout(() => {
        v > 0.1 ? resolve(v) : reject(v);
      }, t);
    });
  }
  return arrP;
};

Promise2.all(getPList()).then(
  (data) => console.log("promise.all 测试:", data),
  (err) => console.error("promise.all 测试:" + err)
);

Promise2.race(getPList()).then(
  (data) => console.log("promise.race 测试:", data),
  (err) => console.error("promise.race 测试:" + err)
);