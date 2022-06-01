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
    // html collection - là một mảng các node trong DOM
    // document.getElementByClassName - lựa chọn 1 node trong DOM theo class name 
    // ví dụ: document.getElementsByClassName("container")
    const allNodess = document.getElementsByClassName("nhanh");
    console.log(allNodess);

    console.log("------------6. document.getElementsByTagName ------------------");
      // document.getElementsByTagName - lựa chọn 1 node trong DOM theo tag name
      // ví dụ: document.getElementsByTagName("div")
      const allNodesss = document.getElementsByTagName("div");
      console.log(allNodesss);

      console.log("------------6. document.getElementById ------------------");
      // document.getElementById - lựa chọn 1 node trong DOM theo id
      // ví dụ: document.getElementById("id")
      const allNodessss = document.getElementById("nhanh");
      console.log(allNodessss);

      console.log("------------7. getAttribute ------------------");
      // getAttribute - lấy giá trị của 1 thuộc tính của 1 node trong DOM
     const link = document.querySelector(".nhanh");
     console.log(link.getAttribute("style"));

     // dùng forEach để lặp qua các node trong DOM
     const li = document.querySelectorAll(".nhanh");
       li.forEach(item => {
         console.log(item.getAttribute("style"));
       });

   console.log("------------8. setAttribute ------------------");
         // setAttribute - thiết lập giá trị của 1 thuộc tính của 1 node trong DOM
         // ví dụ: link.setAttribute("style", "color: red;")
         const links = document.querySelector(".facebook");
         links.setAttribute("target", "_blank");
         console.log(links.getAttribute("target"));

         const linkss = document.querySelectorAll(".facebook");
         linkss.forEach(item => {
             item.setAttribute("target", "_blank");
         });

   console.log("------------9. removeAttribute ------------------");
         // removeAttribute - xóa 1 thuộc tính của 1 node trong DOM
         // ví dụ: link.removeAttribute("style")
         // const linksss = document.querySelector(".facebook");
         // linksss.removeAttribute("style");
         // console.log(linksss.getAttribute("style"));

         // const linkssss = document.querySelectorAll(".facebook");
         // linkssss.forEach(item => {
         //     item.removeAttribute("style");
         // });


   console.log("------------10. hasAttribute ------------------");
         // hasAttribute - kiểm tra xem 1 node có thuộc tính hay không
         // ví dụ: link.hasAttribute("style")
         const linksssss = document.querySelector(".facebook");
         console.log(linksssss.hasAttribute("style"));



   console.log("------------11. attribute textContent ------------------");
         // textContent - lấy text trong 1 thẻ và lấy cả khoảng trắng
         // ví dụ: link.textContent
         const linkssssss = document.querySelector(".facebook");
         linkssssss.textContent = "   hehe    ";
         console.log(linkssssss.textContent);
         

         const linkssssssss = document.querySelectorAll(".facebook");
         linkssssssss.forEach(item => {
               console.log(item.textContent);
         });




   console.log("------------12. attribute innerText ------------------");
         // innerText - lấy text trong một thẻ và không lấy khoảng trắng
         // ví dụ: link.innerText
         const linksssssss = document.querySelector(".facebook");
         console.log(linksssssss.innerText);

   console.log("------------13. attribute innerHTML ------------------");
         // innerHTML - lấy html trong một thẻ và không lấy khoảng trắng
         // ví dụ: link.innerHTML
         const linksssssssss = document.querySelector(".facebook");
         linksssssssss.innerHTML = "<a href='https://www.google.com'>google</a>";
         console.log(linksssssssss.innerHTML);





