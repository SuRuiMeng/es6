console.log("\u{aabb}");//字符的拓展 花括号里面范围为0000到ffff
console.log("\u{abcd}\u{bcde}");//汉字的拓展方法

//es6中六种字符表达方法
{
    '\z' === 'z'  // true
    '\172' === 'z' // true
    '\x7A' === 'z' // true
    '\u007A' === 'z' // true
    '\u{7A}' === 'z' // true
}

//二、codeLookAt()
{
    let s="ac";//没找到占两个字节的汉字 原理一样
    console.log(s.length);
    console.log(s.charAt(0));
    console.log(s.charAt(1));
    console.log(s.charCodeAt(0));//返回十进制的码点
    console.log(s.charCodeAt(1));
    console.log(s.charCodeAt(0).toString(16));//返回十六进制的码点
    console.log(s.charCodeAt(1).toString(16));


    function is32Bit(c) {//判断字节是否大于四个字节
        return c.codePointAt(0) > 0xFFFF;
      }
}

//三、String.fromCodePoint()
{
    console.log(String.fromCodePoint(0x20BB7));//提供了如果大于\uffff能够检测的方法
    /**
     * 如果放入多个检测码点，则将这些码点连接成一个字符串进行测试
     */
}

//四、字符串的遍历器接口
{
    /**
     * 可以使用for of 方法进行字符串的遍历，同时可以遍历大于\uffff的码点字符
     */
    for (let codePoint of 'es6') {
        console.log(codePoint)
      }
}

//五、at()   存疑 at方法提示不存在
{
    /**
     * 'abc'.at(0) // "a"
     *'𠮷'.at(0) // "𠮷"
     */
    let a='abc'.charAt(0);
    console.log(a);
}
//六、normalize() 表示重音的表示方法
//七、includes(), startsWith(), endsWith()
{
    let s = 'Hello world!';//第一个位置为目标字符或者字符串 第二个位置为开始搜索的位置
    console.log("是否找到了参数字符串："+s.includes('world', 6));//返回布尔值，表示是否找到了参数字符串。
    console.log("参数字符串是否在原字符串的头部:"+s.startsWith('Hello', 5));//返回布尔值，表示参数字符串是否在原字符串的头部
    console.log("参数字符串是否在原字符串的尾部:"+s.endsWith('Hello', 6))//返回布尔值，表示参数字符串是否在原字符串的尾部。
}
//八、repeat()//不用解释了 返回重复后的字符串
{
    console.log('Su'.repeat(3));
    console.log('Su'.repeat(2.9));//小数会取整
    //console.log('Su'.repeat(-1));//负数或者无穷大会报错
    //console.log('Su'.repeat(Infinity));
}
//九、padStart()，padEnd() 头部补全 和尾部补全 具体例子如下
{
    console.log('aaa'.padStart(8,'abc'));//参数内容如下 第一个参数总共补全的位数 第二个参数作为补全的字符或字符串
    console.log('aaa'.padStart(9,'abc'));
    console.log('aaa'.padStart(2,'abc'));//如果补全的位数小于等于 初始字符串 则返回初始字符串
}
//十、模板字符串
{
    //es6之前
    console.log('There are <b>'  + '</b> ' +
    'items in your basket, ' +
    '<em>'  +
    '</em> are on sale!');
    //${basket.onSale}将+basket.onSale+改为这种方式
    console.log(`string text line 1

        string text line 2`);//按照现在的这种形式
        //如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
    /**
     * 重点：模板字符串中嵌入变量，需要将变量名写在${}之中
     * 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
     */
}
//十一、标签模板
{
    console.log`123`
    // 等同于
    console.log(123);
    function a(args,s1,s2){
        console.log(args[0]);
        console.log(...args);
        console.log(s1);
        console.log(s2);
    }

    a`xix ${3} haha ${6} fuck`;


    let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
    console.log(literals);
  let result = '';
  let i = 0;

  while (i < literals.length) {
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}

console.log(msg);
}

//十二、String.raw
{

   let a= String.raw`xixi`;
   console.log(a);
}

