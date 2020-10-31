function sleep(delay){
    let start = (new Date()).getTime()
    while ((new Date()).getTime() - start < delay){
        continue
    }
}

//测试
function test() {
  console.log('111');
  sleep(2000);
  console.log('222');
}

test()