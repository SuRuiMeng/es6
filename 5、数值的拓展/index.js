//1.二进制和八进制
{
    console.log(0b11111);
    console.log(0b0001===1);
    console.log(0o23===19);
    console.log(Number(0b0001)===1);//十进制的转换
    console.log(Number(0o23)===19);
}
//2.Number.isFinite(), Number.isNaN() 
/**
 * Number.isFinite() 判断是否为有限的数值 如果不是数值类型一律返回 false
 * Number.isNaN() 判断是否为NaN
 * 它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，
 * 而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。
 */
{
    console.log(Number.isFinite(15));// true
    console.log(Number.isFinite(NaN)); // true
    console.log(Number.isFinite(1/3));//true

    console.log(Number.isNaN(NaN));//ture
    console.log(Number.isNaN(1));//false
}
//3.Number.parseInt(), Number.parseFloat() 
/**
 * 同parseInt parseFloat
 */
//4.Number.isInteger()
/**
 * 判断是否为整数
 * 注意，由于 JavaScript 采用 IEEE 754 标准，数值存储为64位双精度格式，
 * 数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）。如果数值的精度超过这个限度，
 * 第54位及后面的位就会被丢弃，这种情况下，Number.isInteger可能会误判。
 * 如果一个数值的绝对值小于Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨的最小值，
 * 会被自动转为 0。这时，Number.isInteger也会误判。
 */
{
    console.log(Number.isInteger(2.9));//false
    Number.isInteger(3.0000000000000002) // true
    Number.isInteger(5E-324) // false
    Number.isInteger(5E-325) // true
}
//5.Number.EPSILON
/**
 * 一个极小的常量  是es6最小接收的浮点差
 */
{
    console.log(Number.EPSILON);
}
//6.安全整数和 Number.isSafeInteger()
/**
 * 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
 */
{
    console.log(Number.MAX_SAFE_INTEGER);//安全整数
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(Number.isSafeInteger(1223353254));
}
//7.Math的拓展
/**
 * 
 * Math.trunc方法用于去除一个数的小数部分，返回整数部分。
 * Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
 * 它会返回五种值。
 *参数为正数，返回+1；
 *参数为负数，返回-1；
 *参数为 0，返回0；
 **参数为-0，返回-0;
 *其他值，返回NaN。
 *Math.cbrt方法用于计算一个数的立方根。
 *Math.clz32方法返回一个数的 32 位无符号整数形式有多少个前导 0。
 *Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。
 *Math.fround方法返回一个数的32位单精度浮点数形式。 
 *  
 * Math.hypot方法返回所有参数的平方和的平方根。
 * 对数：
 * Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。
 * Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1。
 * Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN。
 * Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN。
 * 双曲函数：
 * Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
 */
//8.指数运算符
{
    console.log(2**10);
    let b = 4;
    b **=3;
    console.log(b);
}
