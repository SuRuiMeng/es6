//与es5的区别
//1、作用域
{
    let a = 1;
    var b = 1;
}

console.log("b:"+b);
//console.log("a:"+a);//a无法找到 说明所声明的变量，只在let命令所在的代码块内有效。

{
    for(let i=0;i<10;i++)
    {
        console.log("里面的:"+i);
    }
    //console.log("外面的："+i);//同样的未找到
}
//下面两个for循环的对比,var声明时整个for循环是一个作用域
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
//每一个单独的循环就是一个作用域
var a = [];
for (let i = 0; i < 10; i++) {
    console.log(i+"####");
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6


//
for(var i of a)
{
    console.log(i);
}