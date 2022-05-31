console.log("------------1. dom------------------");
// dom - the document object model
// what is dom - the document object model - the structure of the html page  
// DOM attribute là các thuộc tính của các thẻ html ví dụ <div class="container"> 
// DOM element là các thẻ html ví dụ <div class="container">
// DOM node là các thẻ html và các thuộc tính của các thẻ html ví dụ <div class="container">
console.log("------------2. selecting nodes------------------");
// selecting nodes - lựa chọn các node trong DOM
// các node có thể là các thẻ html, các thuộc tính của các thẻ html, các phần tử của các thẻ html
console.log("------------3. document.querySelector------------------");
// document.querySelector - lựa chọn 1 node trong DOM
// ví dụ: document.querySelector("#id")
// document.querySelector("div")
// document.querySelector("div.container")
// document.querySelector("div.container.row")
// document.querySelector("div.container.row.col-md-12")
 const singleNode = document.querySelector("title");
 console.log(singleNode);


 console.log("------------4. document.querySelectorAll------------------");
    // document.querySelectorAll - lựa chọn tất cả các node trong DOM
    // NodeList giống araay trong javascript là có thể loop, forEach nhưng không thể sử dụng các 
    // phương thức của array như push, pop, shift, unshift, splice, slice, ...
    // ví dụ: document.querySelectorAll("div")
    // document.querySelectorAll("div.container")
    // document.querySelectorAll("div.container.row")
    // document.querySelectorAll("div.container.row.col-md-12")
    const allNodes = document.querySelectorAll("div");
    console.log(allNodes);

    console.log("------------5. document.getElementsByClassName ------------------");
    // document.getElementByClassName - lựa chọn 1 node trong DOM theo class name 
    // ví dụ: document.getElementsByClassName("container")
    const allNodess = document.getElementsByClassName("nhanh");
    console.log(allNodess);






