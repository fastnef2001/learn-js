// Mảng
// 2 cách tảo mảng
   // array literal
   const students1 = [];
   // array sonstructor
   const students = new Array();

// Ví dụ một mảng
// [o, false, undefined, null, "evondev", [ []]]  mảng trong mảng


const students2 = ["Nhanh", "Tuan", "Hoang", "Nhanh", "Nguyen"];
//index: vị trí của phần tử (giá trị) trong mảng và nó bắt đầu từ 0
//length: độ dài của mảng, nó đếm từ 1

//Truy xuất trong mảng
console.log("----------1.Truy xuất trong mảng------------ ")
console.log(students2[0]);

console.log("----------2.length------------ ")
console.log(students2[students2.length - 1]);

console.log("----------3.reverse -> Đảo ngược giá trị trong mảng------------ ")
console.log(students2.reverse());

console.log("----------4.join -> nối các phần tử trong mảng thành chuỗi------------ ")
console.log(students2.join());

console.log("----------5. indexOf/lastIndexOf------------")
console.log(students2.indexOf("Nhanh"));
console.log(students2.lastIndexOf("Nhanh"));

console.log("----------6.push thêm phần tử vào cuối mảng------------")
students2.push("Hung");
console.log(students2);

console.log("----------7.unshift thêm phần tử vào đầu mảng------------")
students2.unshift("Khoa");
console.log(students2);

console.log("----------8.pop xóa phần tử cuối cùng------------")
students2.pop();
console.log(students2);

console.log("----------9.shift xóa phần tử đầu tiên trong mảng------------")
students2.shift();
console.log(students2);

console.log("----------10.slice------------")

console.log("----------10.1 slice tạo ra mảng mới copy từ mảng ban đầu------------")
const animals = ["tiger", "Lion", "horse", "elephant"]
const animals1 = animals.slice();
console.log(animals1);

console.log("----------10.2 slice(start) start là vị trí index ở trong mảng------------")
const animals2 = animals.slice(1);
console.log(animals2);

console.log("----------10.3 slice(start, end) start là vị trí index bắt đầu, end là vị trí index kết thúc------------")
const animals3 = animals.slice(1, 3);
console.log(animals3);
const animals4 = animals.slice(-3);
console.log(animals4);



console.log("----------11.splice nó sẽ xóa phần tử trong mảng hoặc thay thế------------")
const pets = ["dog", "cat", "bird", "dragon"];

// splice(start)
console.log("----------11.1 splice(start)------------")
const pets1 = pets.splice(2);
console.log(pets1);

// splice(start, deleteCount) : deleteCount là số lượng phần tử muốn xóa hoặc thay thế
console.log("----------11.2 splice(start, deleteCount) : deleteCount là số lượng phần tử muốn xóa hoặc thay thế------------")
const petscopy = ["dog", "cat", "bird", "dragon"];
const pets2 = petscopy.splice(0,2);
console.log(petscopy);

console.log("----------11.3 splice(start, deleteCount, item1, item2, itemN) deleteCount là số lượng phần tử muốn xóa hoặc thay thế------------")
const petscopy1 = ["dog", "cat", "bird", "dragon"];
const pets3 = petscopy1.splice(0,2,"Nhanh", "Hung");
console.log(petscopy1);


console.log("----------12.sort------------")

console.log("----------12.1 sắp xếp các phần tử trong mảng theo chuẩn unicode-16 ------------")
const random = [1, 9999, 10, 5, 09];
console.log(random.sort());
//sort function(a, b))
//function(callback)
// const random1 = random.sort(function(a, b) {
//     if (a > b) return 1; // sắp xếp theo tăng dần
//                return -1;// sắp xếp theo theo giảm dần
// })
const random2 = random.sort((a,b) => (a>b ? 1 : -1));
console.log(random2);

console.log("----------13.find trả về phần tử tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó------------")
const numbers = [1, 9999, 10000000, 5, 09];
// tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = numbers.find((element) => element > 10);
console.log(findYourNumber);
//nếu không tìm thấy thì nó sẽ trả về undefined

console.log("----------14.findIndex nó trả về index đầu tiên trong mảng thỏa điều kiện nòa đó------------")
const findYourIndex = numbers.findIndex((element)=>element>10);
console.log(findYourIndex);
//nếu không tìm thấy thì sẽ trả ra kết quả là -1

console.log("----------15.map duyệt qua từng element trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu------------")
const listNumber = [1, 2, 3, 4, 5];

console.log("----------15.1 trả ra một mảng mới mà các số trong mảng cũ nhân 2------------")
// const listNumberDouble = listNumber.map(function (value, index, array) {
// return value * 2;
// });

const listNumberDouble = listNumber.map((value, index, array) => value *2);
console.log(listNumberDouble);

console.log("----------16.forEach ------------")
const listNumberTripple = listNumber.forEach((value, index, array) => {

});
// forEach không thể dừng lại tại vì nó không thể return như map
// map trả ra mảng mới dựa vào mảng ban đầu còn forEach thì không

console.log("----------17.filter sàn lọc các phần tử trong mảng thỏa điều kiện nào đó ------------")
const greaterThan3 = listNumber.filter((value, index, array) => value > 3);
console.log(greaterThan3);

console.log("----------18.some------------")
// trả về true khi thỏa 1 điều kiện và trả về false khi không thỏa điều kiện nào cả
const someNumber = listNumber.some((value, index, array) => value > 10);
console.log(someNumber);


console.log("----------19.every------------")
// mọi điều kiện điều phải đúng thì mới trả về True và ngược lại
const someNumber1 = listNumber.every((value, index, array) => value > 0);
console.log(someNumber1);

console.log("----------20.reduce------------")
// gom các phần tử trong mảng lại thành 1
const totalNumber = listNumber.reduce((previosValue, currentValue) => previosValue + currentValue, 0);
console.log(totalNumber);


console.log("----------Bài tập về mảng số 1------------")
// Đảo ngược một chuỗi. 
function reverseString(str) {
   if (!str) return null;
   const arrStr = str.split(" ");
   const reverseStr = arrStr.reverse();
   const strAfterJoin = reverseStr.join(" ");
   return strAfterJoin;
}
const a = reverseString("Nhanh dep trai");
console.log(a);


console.log("----------Bài tập về mảng số 2------------")
//Đảo ngược một chuỗi bao gồm các kí tự
function reverseWord(str) {
     if(!str) return null;
     return str.split("").reverse().join("")
}
console.log(reverseWord("i love"));



console.log("----------Bài tập về mảng số 3------------")
// in hoa chữ cái đầu trong chữ
function capitalizeWord(str = "") {
   if(str.length === 0) return null;
   let newWord = str.toLowerCase().charAt(0).toUpperCase();
   let otherWord = str.toLowerCase().slice(1);
   return `${newWord}${otherWord}`;
}

function capitalizeStr(str) {
   if(!str) return null;
   const result = str.split(" ").map(word => capitalizeWord(word)).join(" ");
   console.log(result);
}
capitalizeStr("i love you");


console.log("----------21. by value vs by referrence------------")
console.log("----------21.1 by value -> gía trị thực sự lưu trong vùng bộ nhớ------------")
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // true


console.log("----------21.2 by referrence -> nói tới vùng bộ nhớ------------")
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // false


console.log("----------21.3 so sánh 2 mảng cơ bản------------")
// JSON: javascript object notation
// JSON.stringify() -> convert giá trị sang dưới dạng JSON string
// JSON.parse()
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true
console.log(JSON.parse('[1,2,3]'));

console.log("----------22. cách seo chép mảng cần biết------------")
const students3 = ["a", "b", "c", "d", "e", "f"];
// 1. sử dụng phương thức slice()
const students4 = students3.slice();
console.log(students4);
// 2. sử dụng phương thức spread operator [ ...array]
const students5 = [...students3];
console.log(students5);

console.log("----------23. cách gộp mảng cần nắm------------")
// 1. concat
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);

//2. [...array1, ...array2, ...array3]
const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2);


console.log("----------24. destructing array------------")
const toys = ["car", "ball", "doll", "truck", "train"];
const [toy1, toy2, toy3] = toys;
console.log(toy1, toy2, toy3);

console.log("----------25. rest parameter------------")
const [car,...rest] = toys;
console.log(rest);

// rest không chỉ được sử dụng trong mảng mà còn được sử dụng trong các function
function demo(a, ...rest) {
   console.log(a, rest);
}
demo(1, 2, 3, 4, 5);


console.log("----------26. vòng lặp for cơ bản ------------")
// for (let i = 0; i < toys.length; i++) {
   
//    // if (i === 2) {
//    //    break;
//    // }
//    if (i === 3) {
//       continue;
//    }
//    console.log(toys[i]);
// }
 
for (let i = toys.length - 1; i >= 0; i--) {
   console.log(toys[i]);
   for (let j = 0; j < toys.length; j++) {
      console.log(toys[j]);
   }
}
//break dừng vòng lặp
//continue dừng vòng lặp và tiếp tục vòng lặp ở vị trí i

console.log("----------Bài tập cơ bản về vòng lặp for------------")
// 1. sao chép mảng dùng vòng lặp for
let copyArr = [];
for (let i = 0; i < toys.length; i++) {
   copyArr.push(toys[i]);
}
console.log(copyArr);
// 2. Đảo ngược từ dùng vòng lặp for
let str = "i love you";
let resualt = "";

for (let i = str.length - 1; i >= 0; i--) {
   console.log(str[i]);
   resualt += str[i];
   
}
console.log(resualt);


console.log("----------27. vòng lặp while và do while------------")
//1. while 
let number = 0;
while (number < 10) { 
   console.log(number);
   number++;
}
 
let number2 = 0;
do {
   number2++;
   console.log(number2);
} while (number2 < 10);


console.log("----------28. vòng lặp for of------------")
let b = [];
for (let toy of toys) {
   toy +=" nhanh";
   console.log(toy);
   b.push(toy);
}
console.log(b);

console.log("----------bài tập 1------------")
// 1. cho 1 mảng gồm nhiều giá trị [1,1000,false,null,"nhanh", "", undefined, [1,2,3]].
// viết chương trình loại bỏ các giá trị là falsy (false, null, undefined, "", NaN)
const arrayFalseTrue = [1, 1000, false, null, "nhanh", "", undefined, [1,2,3], NaN];
let arrayFalse = arrayFalseTrue.filter(item => Boolean(item));
console.log(arrayFalse);
let arrayFalses = arrayFalseTrue.filter(item => !Boolean(item));
console.log(arrayFalses);


console.log("----------bài tập 2------------")
// 2. cho một mảng phức tạp [[1,2,3],[false, null], [1,5,6, ["nhanh"]], [888,666, [90]]].
// và kết quả mong muốn là [1,2,3,false,null,1,5,6,"nhanh",888,666,90]
const complexArray = [[1,2,3],[false, null], [1,5,6, ["nhanh"]], [888,666, [90]]];
const result = complexArray.flat(Infinity);
console.log(result);

console.log("----------bài tập 3------------")
// 3. đảo ngược số nguyên. 
function reverseNumber(number = 0) {

   const result = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
   return result;
}
console.log(reverseNumber(-12345));


console.log("----------bài tập 4------------")
// 4. viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 cho tới số nguyên đó
// rồi kiểm tra xem nếu có số chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì in ra chữ "Buzz", 
// nếu chia hết cho 2 và 3 thì in ra chữ "FizzBuzz", nếu không thì in ra số đó.

function fizzBuzz(number) {
   for (let i = 1; i <= number; i++) 
   {
      if (i % 2 === 0 && i % 3 === 0) {
         console.log("FizzBuzz");
      } else if (i % 2 === 0) {
         console.log("Fizz");
      } else if (i % 3 === 0) {
         console.log("Buzz");
      } else {
         console.log(i);
      }
   }
}

fizzBuzz(100);

console.log("----------bài tập 5------------")
// 5. cho 1 chuỗi bất kỳ, đếm số lượng ký tự vovel trong chuỗi
// vovel: a, e, i, o, u, y

function countVowel(str) {
   let count = 0;
   const vowels = ["a", "e", "i", "o", "u", "y"];
   for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
         count++;
      }
   }
   return count;
}
console.log(countVowel("nhanh"));

console.log("----------bài tập 6------------")
// 6. cho 1 mảng các giá trị số [1,2,3,4,5,6,7,8,9,10,1,3,4,5,6,7,8,9].
// viết một function trả về một mảng chưá các giá trị duy nhất trong mảng đó.

function unique(arr) {
   let result = [];
   for (let i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i])) {
         result.push(arr[i]);
      }
   }
   return result;
}

console.log(unique([1,2,3,4,5,6,7,8,9,10,1,3,4,5,6,7,8,9]));


console.log("----------bài tập 7------------")
// 7. viết 1 function xử lý các từ 1 mảng lớn thành nhiều mảng con dựa vào số nguyên đầu vào.
// ví dụ ([1,2,3,4,5] , 2) => [[1,2],[3,4],[5]]
function splitArray(arr, number) {
   let result = [];
   let temp = [];
   for (let i = 0; i < arr.length; i++) {
      temp.push(arr[i]);
      if (temp.length === number) {
         result.push(temp);
         temp = [];
      }
   }
   return result;
}

console.log(splitArray([1,2,3,4,5], 2));

function test(arr, n) {
   let result = [];
   for (let i = 0; i < arr.length; i += n) {
      result.push(arr.slice(i, i + n));
   }
   return result;
}
console.log(test([1,2,3,4,5], 2));