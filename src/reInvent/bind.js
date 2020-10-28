Function.prototype.myBind = function (...args) {
  let fn = this,
    context = args[0],
    bindArgs = args.slice(1)

  return function (...args) {
    fn.apply(context, [...bindArgs, ...args])
  }
}