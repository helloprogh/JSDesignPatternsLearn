//this绑定规则1：默认绑定，场景：独立函数调用
//这种情况下this要么绑定到全局对象，要么绑定undefined(严格模式下)
//注：代码仅在浏览器中运行正常
window.name = "globalName";

var myObject = {
    "name": "sevn",
    "getName": function() {
        return this.name
    }
}

var getName = myObject.getName;
console.log(getName());