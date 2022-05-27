console.log("-----------------1. Cách khai báo object-----------------");
// object literal = {};
const objectLiteral = {};
// object constructor = new Object();
const objectConstructor = new Object();
const student = {
    name: "Nguyen Van A",
    age: 20,
    male: true,
    address: "le duan",
    "last-name": "quang",
    hi: function(){
        console.log("Hello")
    }
}

console.log("-----------------2. Cách truy xuất object-----------------");
// 1. dot notation object.key
console.log(student.name);
// 2. Bracket notation ["key"]
console.log(student["name"]);