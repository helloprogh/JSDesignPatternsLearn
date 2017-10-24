//计算奖金
var S = function(salary) {
    return salary*4;
}

var A = function(salary) {
    return salary*3;
}

var B = function(salary) {
    return salary*2;
}

var calculateBonus = function(func, salary) {
    return func(salary);
}

console.log(calculateBonus(S, 10000));
console.log(calculateBonus(A, 10000));
console.log(calculateBonus(B, 10000));