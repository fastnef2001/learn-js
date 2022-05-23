// function (hàm)
// Khai báo
// cú pháp: function functionName(parameters, parameters) {your code}
// parameters (tham số)
// Đề bài viết hàm tính tổng a và b


//function declarations
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
// không bị hoisting
const name = function () {console.log("your name");}
name();


//IIFE -> immmediately invoked function execution
(function () {
    console.log("nhanh")
})();


//scope : phạm vi của biến mà ta có thể sử dụng
// Global scope,  function scope

let scopeType = "global scope";

function abc() {
    let hehe = "function scope"
}



// block scope

if (2>1) {
    let message = "nhanh oi"
    alert(message);
}

//lexical scope

let aNewName = "Nhanh"
function sayHello() {
    let message = "Hi"
}