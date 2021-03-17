//apply
Function.prototype.myApply = function(context,args){
    context = (typeof context === 'object' ? context : window)
    context.fn = this
    let res = ''
    res = context.fn(...args)
    delete context.fn
    return res
}
//测试
const obj = {
  value: 'hdove'
}

function fn(name, age) {
  return  {
      value: this.value,
      name,
      age
  }
}
fn.myApply(obj, ['LJ', 25]); // {value: "hdove", name: "LJ", age: 25}

//call
Function.prototype.myCall = function(...args){
    context = (typeof args[0] === 'object' ? args[0] : window)
    context.fn = this
    let result = ''
    const newArgs = args.slice(1)
    result = context.fn(...newArgs)
    delete context.fn
    return result
}
//测试
const obj = {
  value: 'hdove'
}

function fn(name, age) {
  return  {
      value: this.value,
      name,
      age
  }
}
fn.myCall(obj, 'LJ', 25); // {value: "hdove", name: "LJ", age: 25}
