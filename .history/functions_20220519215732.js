// function (hàm)
// Khai báo 
// cú pháp: function functionName(parameters, parameters) {your code}
// parameters (tham số)
// Đề bài viết hàm tính tổng a và b 

function sum(a = 0, b = 0) {
    // function sum(parameters = defaultValue)  
    const total = a + b;
    return total;
    // không có return thì kết quả hàm trả về là undefinded
}

console.log(sum(100, 200));
// sum() : invoke function sum(arguments) đối số
