// new
function new2 () {
  const obj = {}
  Constructor = [].shift.call(arguments) //取 arguments 的第一个参数，也就是传进来的对象
  obj.__proto__ = Constructor.prototype
  let ret = Constructor.apply(obj, arguments)
  return typeof ret === 'object' ? ret : obj
}

//测试 new2

let obj1 = JSON.stringify(new Object)
let obj2 = JSON.stringify(new2(Object))
console.log(obj1 === obj2)
