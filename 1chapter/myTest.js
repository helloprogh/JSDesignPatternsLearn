var A = function() {};
A.prototype = {"name": "A"};

var a = new A();
console.log(a.prototype);
console.log(A.prototype);
console.log("name" in a);

//原型与对象没有必然联系，是通过构造气的请求委托层层向上，使其拥有可以向上完成请求的能力
//与Java中的继承有很大不同，Java中的继承是对其父类的属性及方法的集合的完全拷贝
