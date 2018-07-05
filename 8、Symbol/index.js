//
/**
 * 1、由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，
 * 就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
 */
{
    const COLOR_RED    = Symbol('COLOR_GREEN');
const COLOR_GREEN  = Symbol('COLOR_GREEN');
console.log("COLOR_GREEN:"+COLOR_GREEN.toString());
function getComplement(color) {

  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_RED;
    default:
      throw new Error('Undefined color');
    }
}
}

//2、Object.getOwnPropertySymbols 遍历Symbol对象
{

}

//3、Symbol.for()，Symbol.keyFor() 
/**
 * 有时，我们希望重新使用同一个 Symbol 值，
 * Symbol.for方法可以做到这一点。它接受一个字符串作为参数，
 * 然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，
 * 否则就新建并返回一个以该字符串为名称的 Symbol 值。
 */