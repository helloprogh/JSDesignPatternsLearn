//使用call或apply调用函数的指向传进的对象
var obj1 = {
    "name": "sevn",
    "getName": function() {
        return this.name
    }
}

var obj2 = {
    "name": "sevn1"
}

console.log(obj1.getName.call(obj2))    //sevn1