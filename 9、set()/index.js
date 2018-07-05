/**
 * 1、set()
 * 特点：（1）、不会添加重复的对象，成员具有唯一性
 *      （2）、添加类型时不会发生类型转换，两个对象不相等
 * 属性:Set.prototype.constructor：构造函数，默认就是Set函数。
 *      Set.prototype.size：返回Set实例的成员总数。 
 * 操作方法（用于操作数据）:
 * add(value)：添加某个值，返回 Set 结构本身。
 * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 * has(value)：返回一个布尔值，表示该值是否为Set的成员。
 * clear()：清除所有成员，没有返回值。
 * 遍历方法:
 * keys()：返回键名的遍历器
 * values()：返回键值的遍历器
 * entries()：返回键值对的遍历器
 * forEach()：使用回调函数遍历每个成员
 */

 /**
  * 2/WeakSet()
  * 特点：（1）、里面的成员只能是对象
  *       （2）、对于对象的引用是弱引用、即在weakset中的对象也可以被放入垃圾回收装置
  *       （3）、可以用来储存节点
  * 方法：
  *     WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
  *     WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
  *     WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。   
  */
 /**
  * 3、Map();
  * 
  */