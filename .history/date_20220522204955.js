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
console.log(new Date(1653225510291));``
// new Date(date string)->
console.log("Sun May 22 2022 20:18:30 GMT+0700 (Indochina Time)")
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
console.log(new Date(2021, 6, 1, 23, 23, 23, 23));

// các hàm get trong Date
const birthday = new Date(2001, 4, 23);
// in ra năm
console.log


