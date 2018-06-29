//变量可以写成如下结构
let[a,b,c]=[1,2,3];
console.log(a+":"+b+":"+c);
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
console.log(bar);
console.log(baz);
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];//...拓展运算符 作用
head // 1
tail // [2, 3, 4]

let [q, w, ...e] = ['a'];
console.log(":"+w);
console.log(e);
q // "a"
w // undefined
e // []
let [...foo1] = [];
console.log(foo1);
let [bar1, foo2] = [1];
console.log(foo2);
//set结构
let [x, y, z] = new Set(['a', 'b', 'c']);/**
 * 还不太懂 重点标记
 */