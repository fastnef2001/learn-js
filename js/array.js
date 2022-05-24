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


//Phương thức hay dùng trong mãng

