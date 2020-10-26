Function.prototype.myBind = function (...args) {
  let fn = this,
    that = args[0],
    bindArgs = args.slice(1)

  return function (...args) {
    fn.apply(that, [...bindArgs, ...args])
  }
}