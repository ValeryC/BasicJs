// a timer like a timestamp 
console.time('time')
let age = 25
let year = 2019

console.log(age, year) 
// here age change value, we don't need to intialize again with let 
age = 30 
console.log(age)

const points = 100
// points= 50
console.log(points)
// error cause with const the value cannot be reasigned to a new value
// with const value is fixed it never change


// old es5 to declare variable with var 
var score = 75
console.log(score)

// Rules of naming
// use kamelcase => let myVariable;
// name a variable need to be meaningful, like you want to know the year the someone birth  => let yearOfBirth  

// !!! you cannot start naming your variable with a number => let 5myvariable
//!!!! when you declare a variable you cannot add a space for the naming  =>  let my variable
// !!! you cannot use reserved words like (const,let, for, while,  try, if, else , elseif  ...) to declare  a variable => let const = 240 

// strings
console.log('hello, world')

//calcuate time between L2 and L34 
console.timeLog('time')
let email = 'coucou@gmail.com'
console.log(email)

// string concatenation
let firstname = 'Valery'
let lastname = 'CHIN'

let fullname =firstname + ' ' + lastname
 console.log(fullname);

// calculate time between L2 and L46
 console.timeLog('time')

//  getting characters
console.log(fullname[2])

// string length
console.log(fullname.length)

// string methods
console.log(fullname.toUpperCase())

let result = fullname.toLocaleLowerCase()

console.log(result, fullname)

let index = email.indexOf('@')
console.log('@ index is :',index)
//calculate total time , it's very usefull to know if you function is efficient
console.timeEnd('time')

