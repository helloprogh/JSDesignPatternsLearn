//通用惰性单例模式
var getSingle = function(fn) {
    var result;
    return function() {
        return result || (result = fn.apply(this, arguments));
    }
}

var person = function(name, id) {
    this.name = name;
    this.id = id;
    console.log(name);
    return this;
}

var proxyPerson = getSingle(person);

var a = new proxyPerson("name1", 1);
var b = new proxyPerson("name2", 2);
console.log(a === b)