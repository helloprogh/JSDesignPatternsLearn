var duck = {
    "name": "duck",
    "duckSinging": function() {
        console.log("嘎嘎嘎");
    }
}

var chicken = {
    "name": "chicken",
    "duckSinging": function() {
        console.log("嘎嘎嘎");
    }
}

var duckChoir = [];

var joinDuckChoir = function(animal) {
    if(animal && typeof animal.duckSinging === "function") {
        duckChoir.push(animal);
        console.log("恭喜" + animal.name + "加入合唱团");
        console.log("合唱团已有成员数量：" + duckChoir.length);
    }
}

joinDuckChoir(duck);
joinDuckChoir(chicken);