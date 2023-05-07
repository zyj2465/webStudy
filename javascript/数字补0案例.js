// 1、用户输入一个数组，如果数字小于10则对数字进行补0，比如09/03
let num = prompt("请输入一个数字")

let result = num > 10 ? num : '0' +String(num)
console.log(result)