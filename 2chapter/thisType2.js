//作为对象的方法被调用，绑定对象
var obj = {
    "a": 1,
    "getA": function() {
        return this.a
    }
}

console.log(obj.getA());