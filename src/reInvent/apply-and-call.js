//apply
Function.prototype.myApply = function(context,args){
    context = (typeof context === 'object' ? context : window)
    let res = ''
    if(!args){res = context.fn()}
    else{res = context.fn(...args)}
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
Function.prototype.myCall = function(context){
    context = (typeof context === 'object' ? context : window)
    context.fn = this
    let result = ''
    const args = [...arguments].slice(1)
    result = context.fn(...args)
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
