// function (hàm)
// Khai báo
// cú pháp: function functionName(parameters, parameters) {your code}
// parameters (tham số)
// Đề bài viết hàm tính tổng a và b


//function declarations
console.log("-----------------------1.function declarations--------------------")
function sum(a = 0, b = 0) {
  // function sum(parameters = defaultValue)
  const total = a + b;
  return total;
  // không có return thì kết quả hàm trả về là undefinded
}

console.log(sum(100, 200));
// sum() : invoke function sum(arguments) : đối số

// lưu function vào 1 biến rồi gọi lại sau

function add(a = 0, b = 0) {
  const total = a + b;
  return total;
}

const sum1 = add;

// tính trung bình
// fn : function
function average(a=0, b=0, fn) 
{
    const total = fn(a, b);
    const arg = total/2;
    return arg;
}

console.log(average(100,200,sum1));


// anonymous function (function expression)
console.log("-----------------------2.anonymous function (function expression)--------------------")
// không bị hoisting
const name = function () {console.log("your name");}
name();


//IIFE -> immmediately invoked function execution
(function () {
    console.log("nhanh")
})();


//scope : phạm vi của biến mà ta có thể sử dụng
console.log("-----------------------3.scope--------------------")

// Global scope,  function scope

let scopeType = "global scope";

function abc() {
    let hehe = "function scope"
}



// block scope

// if (2>1) {
//     let message = "nhanh oi"
//     alert(message);
// }

//lexical scope

let aNewName = "Nhanh"
function sayHello() {
    let message = "Hi"
    console.log(`${message} ${aNewName}`);
}
sayHello();


// closure scope

function sayHello2(){
    let message = "hi"
    function sayHi(){
        console.log(message);
    }
    return sayHi
}

let hello = sayHello2();
hello();

function sayHello3(message){
    return function(name){
        console.log(`${message} ${name}`);
    }
}

let hello1 = sayHello3("hello");
hello1("nhanh");


// các biến cục bộ (block scope, function scope) sau khi function đó chạy xong các biến sẽ không truy xuất được nưa. Nhưng đối với closure thì vẫn được 



console.log("-----------------------4.BT1 viết function so sánh 2 số a và b , tìm ra số lớn hơn--------------------")
function compare(a=0, b=0) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "a hoặc b không phải số";
    }
    else{
        return Math.max(a, b);
    }
}
console.log(compare(4,"100"));



console.log("-----------------------5.BT2 in hoa chữ cái đầu--------------------")

function powerCase(string) {
const first = string.trim().charAt(0).toUpperCase();
const includeName = string.substr(1).toLowerCase();
return `${first} ${includeName}`;
}
console.log(powerCase(string = "NHANH")) 