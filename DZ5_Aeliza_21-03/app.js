const Reverse = function (str) {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) newStr += str[i];
    return newStr
}
console.log(Reverse('Привет'))
// 2
const calc = function (){
    let sum = 0
    for (let i = 0; i < arguments.length; i++) sum += arguments[i]
    return sum/arguments.length
}
console.log(calc(13, 4, 5, 6, 9, 2))