// Первое задание--------
var age;
age = 50;
var myName;
myName = 'Max';
var toogle;
toogle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
// let callback = (a: number) => number
// callback = (a) => { return 100 + a }
// Второе задание----------
var something;
something = 'text';
something = 10;
// Третье задание---------
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// Четвертое задание----------
var person;
person = ['Max', 26];
// Пятое задание-------------
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var currentStatus = {
    status: Status.LOADING
};
if (currentStatus.status === Status.LOADING) {
    console.log('Loading...');
}
if (currentStatus.status === Status.READY) {
    console.log('Loading is done');
}
// Шестое задание-------
var union;
// Седьмое задание------------
var literal;
// Восьмое задание------------
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
console.log(calc(2, 5));
var page = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
