var sum = function (a, b) {
    return a + b;
};
var answer = sum(4, 5);
console.log(answer);
var isCool = true;
var age = 56;
var eyeColor = 'brown';
var favQuote = "I'm not old, I'm only " + age;
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['cat', 'dog', 'pig'];
var wizard = {
    a: 'John'
};
var meh = undefined;
var noo = null;
// tuple: can store different types
var basket;
basket = ['basketball', 5];
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// let sizeSmall: number = Size.Small
var sizeSmall = Size['Small'];
console.log(sizeName);
console.log(sizeSmall);
// any type - convert javascript code to typescript
// temp placeholder
var whatever = 'aghhhhhhhhh';
whatever = basket;
// void use by function don't return anything
var sing = function () {
    console.log('hello');
};
// never: for function never return
// never: for function with no end point and throw error
var error = function () {
    throw Error('ooops');
};
// type - to check
// type RobotArmy {
// 	count: number,
// 	type: string,
// 	magic: string
// }
var fightRobotArmy1 = function (robots) {
    console.log('FIGHT');
};
// magic property is optional
fightRobotArmy1({ count: 1, type: 'dragon' });
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT');
};
var dog = {};
dog.count;
// function 
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT');
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'laaaaaa';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAWWWWW');
lion.greet();
// union type - can be string or number
var confused = 5;
// infer type
var x = 4; // x is inferred as number
// x = 'hello' 
