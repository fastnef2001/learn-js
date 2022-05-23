// function (hàm)
// Khai báo 
// cú pháp: function functionName(parameters, parameters) {your code}
// parameters (tham số)
// Đề bài viết hàm tính tổng a và b 

function sum(a = 0, b = 0) {
    const total = a + b;
    return total;
}

console.log(sum(100, 200));