// Первое задание--------
let age: number
age = 50
let myName: string
myName = 'Max'
let toogle: boolean
toogle = true
let empty: null
empty = null
let notInitialize: undefined
notInitialize = undefined
// let callback = (a: number) => number
// callback = (a) => { return 100 + a }





// Второе задание----------

let something: any
something = 'text'
something = 10








// Третье задание---------

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}


// Четвертое задание----------
let person: [string, number]

person = ['Max', 26]



// Пятое задание-------------

enum Status { LOADING, READY }

const currentStatus = {
  status: Status.LOADING
}
if (currentStatus.status === Status.LOADING) {
  console.log('Loading...');
}
if (currentStatus.status === Status.READY) {
  console.log('Loading is done');
}




// Шестое задание-------
let union: string | number




// Седьмое задание------------
let literal: 'enable' | 'disable'


// Восьмое задание------------
function showMessage(message: string) { 
  console.log(message);
}

function calc(num1: number, num2: number) { 
  return num1 + num2
}

console.log(calc(2, 5));


// Девятое задание-----------




type Page = {
  title: string
  likes: number
  accounts: []
  status: 'open' | 'close'
  details: {
    createAt: Date
    updateAt: Date
  }
}
const page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

