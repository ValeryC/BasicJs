// coommon string methods
console.time('time2')
let email2 = 'coucou@gmail.com';

// give the last Index of the characters
let result2 = email2.lastIndexOf('u')

// give the first index of the characters
let result3 = email2.indexOf('u')

console.log(email2)
console.log("lastIndex of result2: ", result2 +" , "+ "index of for result3: ", result3 )

// display from initial index position to end index postion
let resultOfSlice= email2.slice(2, 8)

 console.log(resultOfSlice)

 // first param indicate start index position 2nd params indicate how many characters to display 
let resultOfSubstr = email.substr(4,8)

console.log(resultOfSubstr)

// 1params the 1st letter you want to replace, 2nd params replace by the letter you want
//only replace the first one not the second c in index 3 
let resultReplace = email.replace('c', 't')

console.log(resultReplace)
console.timeEnd('time2')