//使用apply散开数组最安全的方法
var nullObj = Object.create(null);

var func = function(a, b, c) {
    console.log("a: " + a + ",b: " + b + ",c: " + c);
}

func.apply(nullObj ,[1, 2, 3]); //比直接传入null会更安全，直接传null会引起某些不要必要的bug