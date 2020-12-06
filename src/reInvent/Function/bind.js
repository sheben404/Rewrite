Function.prototype.myBind = function (...args) {
  let fn = this,
    context = args[0],
    bindArgs = args.slice(1)

  return function (...newArgs) {
    // 这个时候的 newArgs 是指调用 bind 返回的函数时新传入的参数
    fn.apply(context, [...bindArgs, ...newArgs])
  }
}