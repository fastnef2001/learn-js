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
