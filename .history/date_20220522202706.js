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
// new Date(date string)->
// new Date(year, month, day)


