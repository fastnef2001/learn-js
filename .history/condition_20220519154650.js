// if /else if /else
console.log("------------1.if /else if /else----------")
const myMomey = 100
if (myMomey > 100) {
    console.log("I will buy a new car")
}else if (myMomey > 10) {
   console.log("I will give you some money") 
}else
{
    console.log("I will save my money")
}


//prompt, confirm, alert
console.log("------------2.prompt, confirm, alert----------")

//alert("có tin nhắn kìa")

// const yourName = prompt("Nhập tên của bạn", "");
// console.log(yourName);

// const yourAge = confirm("Bạn đã 18 tuổi?");
// console.log(yourAge);

console.log("------------Bt1.Nhập số tuổi và nếu trên 18 tuổi cho phép xem phim----------")
// const yourAge = confirm("Bạn đã 18 tuổi?");
// if (yourAge == true)
// {
//    console.log("Mời bạn xem phim")
// }else 
// {
//     console.log("Bạn không được coi phim")
// }

// const yourAge = prompt("nhap so tuoi: ","");
// let mess = "you cant watch this film";
// if (Number(yourAge) >= 18)
// {
// mess = "you can watch this film"
// }
// // console.log(mess)
// alert(mess)


console.log("------------Bt2. cho 2 số và tím số lớn hơn----------")
const a = prompt("Nhap so a:", "");
const b = prompt("Nhap so b:", "");
let mess = "a = b";
if (Number(a) > Number(b))
{
   mess = `${a} > ${b}`;
}
else if (Number(a) < Number(b))
{
    mess = `${a} < ${b}`;
}
else if (a == "" || b == "" || a != String || b != String)
{
  mess ="khong  nhan gia tri a va b"
}

alert(mess);



// switch case
const fruit = "banana;
console.log("------------3. switch case----------")
switch (fruit) {
    case "apple":
        console.log("You want to eat apple")
        break;
    case "banana":
    case "orange":
        console.log("You want to eat orange and banana") ")
        break;    

    default:    
       console.log("Ban chua chon mon ")
        break;
}
