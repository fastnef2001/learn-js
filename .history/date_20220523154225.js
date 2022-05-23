const now = new Date();
console.log(now);
// built-in objects: là những cái đã có sẵn trong javacrip rồi, chỉ cần lấy ra sử dụng thôi
//Sun May 22 2022 20:13:57 GMT+0700 (Indochina Time)
// Timezone : GMT+0700 (Indochina Time)


console.log("----------1.Timestamp and Epoch time-----------")

console.log(new Date(0));// Epoch time Thu Jan 01 1970 08:00:00 GMT+0800 (Indochina Time)
console.log(now.getTime());// print timestamp 1653225510291

// new Date() -> In ra ngày giờ hiện tại
// new Date(Timestamp) -> dựa vào timestamp để in ra ngày giờ
console.log(new Date(1653225510291));
console.log("Sun May 22 2022 20:18:30 GMT+0700 (Indochina Time)")

// new Date(date string)->
console.log("---------new Date(date string)------")
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());// M/D/Y
console.log(now.toLocaleDateString("vi-VI"));// D/M/Y
console.log(now.toISOString());



// new Date(year, month, day, hours, minutes, seconds, milliseconds)
console.log(new Date(2021, 6, 1, 23, 23, 23, 23));

// các hàm get trong Date
const birthday = new Date(2001, 4, 23);
// in ra năm
console.log(birthday.getFullYear());
// in ra tháng bằng đầu từ 0 - tháng 1
console.log(birthday.getMonth());
// in ra ngày của tháng
console.log(birthday.getDate());
// in ra ngày của tuần 0 - thứ chủ nhật
console.log(birthday.getDay());
// in ra giờ
console.log(birthday.getHours());
// in ra timestamp
console.log(birthday.getTime());





// các hàm set trong date
//y chang trên chỉ thay get bằng set


console.log("---------BT1.23/05/2001-----");
const myTime = new Date("Sun May 22 2022 20:18:30 GMT+0700 (Indochina Time)");
const myYear = myTime.getFullYear();
const myMonth = myTime.getMonth()+1;
const myDate = myTime.getDate();
const prefixMonth = myMonth < 10 ? "0":"";
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`)


//setTimeout
// console.log("------setTimeout-------");
// setTimeout(function(){alert("setTimeout")}, 5000);
// setInterval
console.log("------setInterval-------");
const timer = setInterval(function(){console.log("setInterval")},3000);
clearInterval(timer);

console.log("---------BT2. viết chương trình nhập vào năm sinh và in ra số tuổi-----");
function getAge(year) {
    if(typeof year !== "number") return 0;
       
    
    const now = new Date();
    const currentYear = now.getFullYear();
    return currentYear - year;
}
const age = getAge("sdd");
console.log(age);





console.log("---------BT3. viết chương trình đếm ngược thời gian theo từng giây (countdown) dựa vào thời gian đầu vào-----");
// function countdown(time){
//   let seconds =  time * 60;
//   let counter = 0;
//   const timer = setInterval(function (){
//       counter +=1;
//       console.log(counter);
//       if (counter === seconds){
//           clearInterval(timer);
//           console.log("your time is end!");
//       }
//   },1000);
// }

// countdown(2);







console.log("---------BT4. viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại-----");
function timeSince(date){
    const now = new Date();
    const yourdate = new Date(date);
    let seconds = Math.floor((now.getTime() - yourdate.getTime())/1000);
    let timer = seconds / 31536000;
    console.log(timer);
    if (timer < 0 ) {
        alert("Your time i");
        return;
    }
    if (timer >= 1) {
        console.log(`${timer} năm trước`);
        return;
    }
    timer = seconds / 2678400;
    if (timer >= 1) {
        console.log(`${Math.floor(timer)} tháng trước`);
        return;
    }
    timer = seconds / 604800;
    if (timer >= 1) {
        console.log(`${Math.floor(timer)} tuần trước`);
        return;
    }
    timer = seconds / 86400;
    if (timer >= 1) {
        console.log(`${Math.floor(timer)} ngày trước`);
        return;
    }
    timer = seconds / 3600 ;
    if (timer >= 1) {
        console.log(`${Math.floor(timer)} giờ trước`);
        return;
    }
    timer = seconds / 60;
    if (timer >= 1) {
        console.log(`${Math.floor(timer)} phút trước`);
        return;
    }
    if (timer < 1) {
        console.log(`${seconds} giây trước`);
    }
    return;



}
timeSince("Mon May 23 2022 15:07:09 GMT+0700 (Indochina Time)")