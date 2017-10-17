var makeSound = function(animal) {
    animal.sound();
}

var Duck = function(){};
Duck.prototype.sound = function() {
    console.log("嘎嘎嘎");
}

var Chicken = function(){};
Chicken.prototype.sound = function() {
    console.log("咯咯咯")
}

var duck = new Duck();
var chicken = new Chicken();

makeSound(duck);
makeSound(chicken);