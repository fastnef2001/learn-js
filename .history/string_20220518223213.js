//string
console.log("-----------string------------")
"Hello world"; //double quotes
'Hello world'; //single quotes
`Hello world`; //back ticks 

const name = "Nhanh";
console.log(name);
console.log(typeof name)

const name1 = "name 1: Tôi tên là " + name;
const name2 = `name 2: Tôi tên là ${name}
Tôi 21 tuổi`
console.log(name1);
console.log(name2);



//các hàm hay dùng với string
//1. index là vị trí của từng kí tự trong chuổi bao gồm cả khoảng trắng bắt đầu từ trái sang phải là 0, bắt đầu từ phải sang trái là -1  
//2. length
//3. split
//4. toLowerCase
//5. toUpperCase
//6. startsWith
//7. endsWith
//8. includes
//9. indexOf
//10. replace
//11. repeat
//12. slice




console.log("-----------2.length------------")
//2. length
     console.log(name.length);
     // Nhanh : 0->4 length = 5

console.log("-----------3.split------------")
//3. split     
     const name3 = "Quang Nhanh";
     console.log(name3.split(" "));
     console.log(name3.split(""));
     console.log(name3.split("/"));  
     
console.log("-----------4.toLowerCase------------")
//4. toLowerCase
     console.log(name3.toLowerCase());
     
console.log("-----------5.toUpperCase------------")
//5. toUpperCase
     console.log(name3.toUpperCase());    

console.log("-----------6.startsWith------------")
//6. startsWith
     console.log(name3.startsWith("Quang"));    
     console.log(name3.startsWith("dung"));   

console.log("-----------6.startsWith------------")
//6. startsWith
     console.log(name3.startsWith("Quang"));    
     console.log(name3.startsWith("dung"));   

                              