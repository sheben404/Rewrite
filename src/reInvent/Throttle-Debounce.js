//Throttle
function Throttle(fn, delay){
    let canUse = true
    return function(){
        if(canUse){
            canUse = false
            fn.apply(this,arguments)
            setTimeout(()=>{
                canUse = true
            },delay)
        }
    }
}
//测试
const throttled = Throttle(() => console.log('hi'))
throttled()
throttled()

//Debounce
function debounce(fn, delay){
     let timerId = null
     return function(){
         const context = this
         if(timerId){window.clearTimeout(timerId)}
         timerId = setTimeout(()=>{
             fn.apply(context, arguments)
             timerId = null
         },delay)
     }
 }
 //测试
const debounced = debounce(() => console.log('ha'))
debounced()
debounced()