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

console.log("-----------------3. Thay đổi giá trị của Object-----------------");
student.name = "Nguyen Van B";
student.isFast = true;
console.log(student);

console.log("-----------------4. xóa giá trị của Object-----------------");
// xóa giá trị trong object
delete student.isFast;
delete student["last-name"];
console.log(student);

console.log("-----------------5. for in-----------------");
// for in trong object - duyệt qua từng phần tử của object
for(let key in student){
    console.log(`${key} : ${student[key]}`);
}

console.log("-----------------6. Objectkeys-----------------");
// objectkeys trong object - trả về một mảng các key của object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);


console.log("-----------------7. Objectvalues-----------------");
// objectvalues trong object - trả về một mảng các value của object
const values = Object.values(student);
console.log(values);


console.log("-----------------8. Objectentries-----------------");
// objectentries trong object - trả về một mảng các key và value của object 
// với mỗi phần tử là một mảng có 2 phần tử
// ví dụ: [["name", "Nguyen Van A"], ["age", 20]]
const entries = Object.entries(student);
console.log(entries);


console.log("-----------------9. ObjectfromEntries-----------------");
// Object.fromEntries() trong object - trả về một object từ một mảng các phần tử
// ví dụ: {name: "Nguyen Van A", age: 20}
const objectFromEntries = Object.fromEntries(entries);
console.log(objectFromEntries);


console.log("-----------------10. Objectassign-----------------");
// Object.assign(a, b) trong object - trả về một object mới từ 2 object
// ví dụ: {name: "Nguyen Van A", age: 20, isFast: false}
const objectAssign = Object.assign({}, student, {isFast: false});
console.log(objectAssign);

console.log("-----------------11. Objectfreeze-----------------");
// Object.freeze trong object - trả về một object được đóng băng - không thể thay đổi giá trị của object
// ví dụ: {name: "Nguyen Van A", age: 20}
// const objectFreeze = Object.freeze(student);
// console.log(objectFreeze);


console.log("-----------------12. Objectseal-----------------");
// Object.seal() trong object - cho phép chỉnh sửa giá trị của object - không thể thêm phần tử vào object và xóa
// ví dụ: {name: "Nguyen Van A", age: 20}
const objectSeal = Object.seal(student);
delete objectSeal.age;
objectSeal.address = "nhanh";
console.log(objectSeal);

console.log("-----------------13. cách sao chép một oject-----------------");
// cách sao chép một object {...object}
const objectCopy = {...student};
objectCopy.name = "Nguyen Van C";
console.log(objectCopy);
console.log(student);
// sao chép một object với Object.assign()
const objectAssignCopy = Object.assign({}, student);
objectAssignCopy.name = "Nguyen Van D";
console.log(objectAssignCopy);
console.log(student);
// seo chép một object bằng JSON.stringify()
// JSON.STRINGIFY() - chuyển đổi một object thành chuỗi JSON
// JSON.PARSE() - chuyển đổi chuỗi JSON thành một object
const objectJSONCopy = JSON.parse(JSON.stringify(student));
objectJSONCopy.name = "Nguyen Van E";
console.log(objectJSONCopy);


console.log("-----------------14. từ khóa this tong object-----------------");
// this trong object - trả về một object chính
// ví dụ: {name: "Nguyen Van A", age: 20}
const student2 = {
    name: "Nguyen Van A",
    age: 20,
    hi: function(){
        console.log(this);
    }
}
student2.hi();

console.log("-----------------15. optional chaining-----------------");
// optional chaining trong object - trả về giá trị của phần tử nếu phần tử không tồn tại thì trả về undefined
// ví dụ: {name: "Nguyen Van A", age: 20}
const student3 = {
    name: "Nguyen Van A",
    age: 20,
    address: {
        city: "Ha Noi"
    }
}
// console.log(student3.address.city);
console.log(student3.address?.city);



console.log("-----------------16. destructuring object-----------------");
// destructuring object trong javascript - trả về các giá trị của object
// ví dụ: {name: "Nguyen Van A", age: 20}
const {name, age} = student3;
console.log(name);
console.log(age);

// dùng destructure trong function
function getInfo({name, age}){
    console.log(name, age);
}   
getInfo(student3);


console.log("-----------------bt1-----------------");
// viết một function kiểm tra xem value có phải là một object hay là một araay hay không
// trả về "object" hoặc "array" hoặc "not object"
// Array.isArray trong javascript - kiểm tra xem value có phải là một array hay không
function checkType(value){
    if(typeof value === "object" && value !== null){
        if(Array.isArray(value)){
            return "array";
        }
        return "object";
    }
    return "not object";
}   
console.log(checkType(student3));
console.log(checkType([1, 2, 3]));
console.log(checkType(1));
console.log(checkType("Nguyen Van A"));
console.log(checkType(true));
console.log(checkType(null));

console.log("-----------------bt2-----------------");
// {name: "Nguyen Van A", age: 20} -> [["name", "Nguyen Van A"], ["age", 20]]
function objectToArray(object){
    const array = [];

    if(typeof object === "object" && object !== null){
        if(Array.isArray(object)){
            return;
        }
        else {
            for(let key in object){
                array.push([key, object[key]]);
            }
        }
        return array;
    }
}
console.log(objectToArray(student3));
console.log(student3);

// cách khác    
// Object.entries(student3) - trả về một array các phần tử của object
const value = Object.entries(student3);
console.log(value);

const valuess = Object.keys(student3).map(key => [key, student3[key]]);
console.log(valuess);


console.log("-----------------bt3-----------------");
// without
// ({name: "Nguyen Van A", age: 20}) -> {name: "Nguyen Van A"}
//(object, ...keys) - trả về một object mà các key không nằm trong keys
// ...keys - trả về một array các key của object
// keys.forEach - duyệt qua mỗi phần tử của keys
function without(object, ...keys){
    const newObject = {...object};
    keys.forEach(key => delete newObject[key]);
    return newObject;
}
console.log(without(student3, "age", "address"));
console.log(student3);

console.log("-----------------bt4-----------------");
// { a: 1, b: 2, c: 3, d: 4} , { a: 1, b: 2, c: 3, d: 4} ->true
// { a: 1, b: 2, c: 3, d: 4} , { a: 1, b: 2, c: 3, d: 5} ->false
// (object1, object2) - trả về true nếu object1 và object2 có cùng các key và giá trị
// Array.isArray(object1) - true nếu object1 là một array
function isEqual(object1, object2){
    if(typeof object1 === "object" && typeof object2 === "object" && object1 !== null && object2 !== null){
        if(Array.isArray(object1) && Array.isArray(object2)){
           
            
            return false;
        }

        else {
            const keys1 = Object.keys(object1);
            const keys2 = Object.keys(object2);
            if(keys1.length === keys2.length){
                for(let i = 0; i < keys1.length; i++){
                    if(object1[keys1[i]] !== object2[keys2[i]]){
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
    }
    return false;
}

console.log(isEqual([1,2,3],[1,2,3]));



