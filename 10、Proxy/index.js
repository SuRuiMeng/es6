/**
 * Proxy 用于修改某些操作的默认行为，
 * 等同于在语言层面做出修改，
 * 所以属于一种“元编程”（meta programming），
 * 即对编程语言进行编程。
 * 特点：（1）、如果给一个对象设置两个代理器或者更多的话， 所有的代理器都会生效：
 */
{
    let proxy=new Proxy({},{
        set:function(target,bc){
            console.log('cccccc');
            return target;
        },
        get:function(target,a)
        {
            console.log('bbbbbbbb');
            return a ;
        },
        
    });
    console.log(proxy.dsajdlkasjl);
}