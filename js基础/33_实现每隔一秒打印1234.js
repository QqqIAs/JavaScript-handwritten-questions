for (let i = 1; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i*1000);
}

//闭包
for(var i = 1; i < 5; i++) {
  (function(i){
    setTimeout(() => {
      console.log(i)
    }, i*1000);
  })(i)
}