Array.prototype.bubbleSort = function(){
    for(let i = 0; i < this.length - 1; i += 1){
        for(let j = 0; j < this.length - 1 - i; j += 1){//这里的减 i 也算是一个小优化
            if(this[j] > this[j+1]){
                let temp = this[j]
                this[j] = this[j+1]
                this[j+1] = temp
            }
        }
    }
}