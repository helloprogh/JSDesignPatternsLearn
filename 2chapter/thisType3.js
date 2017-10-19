//new关键字调用，绑定到new新建的对象
var MyTest = function(){
    this.name = "sevn"
}

var obj = new MyTest();

console.log(obj.name)
//如果函数显示的返回了一个对象（仅限对象类型），会返回这个对象而不是期待的this定义的属性新对象
var MyTest2 = function() {
    this.name = "sevn1";
    return {"name": "sevn2"}
}

var obj1 = new MyTest2();
console.log(obj1.name)