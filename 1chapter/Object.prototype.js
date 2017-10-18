/**
 * 如果对象无法响应某个请求，它会把这个请求委托给它的构造器原型
 */
var A = function() {};
A.prototype = {"name": "test"};

var B = function() {};
var a = new A();
B.prototype = a;

var b = new B();
console.log(b.name);
console.log(b);
console.log(Object.getPrototypeOf(b) === a);    //true
console.log(Object.getPrototypeOf(b) === B.prototype);  //true
console.log(Object.getPrototypeOf(a) === A.prototype);  //true

/**
 * 1.尝试遍历对象b中的所有属性，但是没有找到name这个属性
 * 2.查找name属性的请求被委托给对象b的构造器的原型，原型
 * 被__proto__记录着并指向B.prototype,而b.prototype被
 * 设置为一个通过new A()创建出来的对象a
 * 3.在a中依然没有找到属性name，于是请求继续被委托到a的构造器原型A.prototype
 * 4.在A.prototype中找到了属性name，并返回它的值
 */