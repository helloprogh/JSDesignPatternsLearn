function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

var objectFactory = function() {
    var obj = new Object(),
        Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;
}

var a = objectFactory(Person, 'sven');

console.log(a.name);
console.log(a.getName());
console.log(Object.getPrototypeOf(a) === Person.prototype);
/**
 *代码中的__proto__下划线是两个 
 */

