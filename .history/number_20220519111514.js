const d = 10
console.log(typeof d)
console.log(4 + 8)




console.log("---------1.parseInt------");  
const number2 = "5";
console.log(parseInt(number2));  

console.log("---------2.parseFloat------");  
const number1 = "4.8";
console.log(parseFloat(number1));

console.log("---------3.Math.abs------");  
const number3 = -10;
console.log(Math.abs(number3));

console.log("---------4.Math.floor------");  
const number4 = 4.6;
console.log(Math.floor(number4));

console.log("---------5.Math.ceil------");  
console.log(Math.ceil(number4));

console.log("---------6.Math.floor------");  
const number5 = 4.6;
const number6 = 4.3;
console.log(Math.round(number5));
console.log(Math.round(number6));

console.log("---------7.toFix------");  
console.log(parseFloat((1/3).toFixed(2)));

console.log("---------8.Math.random------");  
console.log(Math.floor(Math.random() * 10));        

console.log("---------9.Math.max/min------");  
console.log(Math.max(1, 3, 7.5));
console.log(Math.min(1, 3, 7.5));

console.log("---------10.Math.pow------");  
console.log(Math.pow(2, 3));


//isNaN VS number.isNaN
//NaN is not number
console.log("-------------------11.isNaN VS number.isNaN---------------");
console.log(isNaN("nhanh"));
console.log(isNaN("12345"));
console.log(Number.isNaN("nhanh"));
console.log(Number.isNaN("12345"));
console.log(Number.isNaN(NaN));

console.log("---------12.Number(value)------");  
console.log(number)