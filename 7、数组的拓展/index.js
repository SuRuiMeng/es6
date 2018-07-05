//...拓展运算符 
/**
 * 重要的点：
 */

 //2、Array.from();
 /**
  * 任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。
  */
 {
    //let ps = document.querySelectorAll('p');
    //Array.from(ps).filter(p => {
    //  return p.textContent.length > 100;
    //});
 }

  //3、Array.of();将数值转换成数组
  {
      console.log(Array.of(3));
      console.log(new Array(3)
          );
  }
  //4、数组实例的 copyWithin()
  /**
   * 数组实例的copyWithin方法，在当前数组内部，
   * 将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
   * 也就是说，使用这个方法，会修改当前数组。
   */
  {
      console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
  }
  //5、数组实例的 find() 和 findIndex() 
  /**
   * 
   */
  {
      console.log([1, 4, -5, 10].find((n) => n>0&&n<5));
  }
  //6、数组实例的 fill()
  /**
   * fill方法使用给定值，填充一个数组。
   */
  {
      console.log(['a', 'b', 'c'].fill(7, 1, 2));
  }