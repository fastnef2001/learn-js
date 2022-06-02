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



console.log("------------14. attribute classList ------------------");    
// add classList - thêm class vào 1 node trong DOM
// ví dụ: link.classList.add("class")
const linkssssssssss = document.querySelector(".facebook");
linkssssssssss.classList.add("hoang");
linkssssssssss.classList.add("thien");
console.log(linkssssssssss.classList);

// remove classList - xoa class trong 1 node trong DOM
// ví dụ: link.classList.remove("class")
const linksssssssssss = document.querySelector(".facebook");
// linksssssssssss.classList.remove("hoang");
console.log(linksssssssssss.classList);

// classList.contains - kiểm tra xem 1 node có class nào hay không
// ví dụ: link.classList.contains("class")
const linkssssssssssss = document.querySelector(".facebook");
console.log(linkssssssssssss.classList.contains("thien"));
console.log(!linkssssssssssss.classList.contains("thien"));

// classList.toggle - thêm class vào 1 node trong DOM nếu nó không có class đó
// ví dụ: link.classList.toggle("class")
const linksssssssssssss = document.querySelector(".facebook");
// linksssssssssssss.classList.toggle("thien");
// console.log(linksssssssssssss.classList);

// classNames - lấy tất cả các class của 1 node trong DOM
// ví dụ: link.classnames
const linkssssssssssssss = document.querySelector(".facebook");
console.log(linkssssssssssssss.className);
linkssssssssssssss.className = "facebook";
console.log(linkssssssssssssss.className);


console.log("------------14. thêm xóa sửa node trong javascrip ------------------");    
// 1. tạo ra mộ element trong DOM
const newElement = document.createElement("div");
//2. appendChild - thêm 1 node vào 1 node khác
const parent = document.querySelector(".nhanh");
parent.appendChild(newElement);
// 2. thêm class vào element
newElement.classList.add("facebook");
newElement.className = "facebook nhanh hoanh linh";
// 3. thêm text vào element
newElement.textContent = "hehe";
// 4. thêm html vào element
// newElement.innerHTML = "<a href='https://www.google.com'>google</a>";
// 5. thêm attribute vào element
newElement.setAttribute("style", "color: red;");

//bt 
const bt = document.createElement("div");
const parents = document.querySelector(".nha");
parents.appendChild(bt);
bt.classList.add("card");

const bt1 = document.createElement("a");
bt.appendChild(bt1);
// bt1.setAttribute("src", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");
bt1.setAttribute("class", "card-img");


console.log("------------15. createTextNode ------------------");   
// createTextNode - tạo ra 1 node text trong DOM
// ví dụ: document.createTextNode("text")
const text = document.createTextNode("NHANHNHANH");
bt1.appendChild(text);

console.log("------------16. cloneNode------------------"); 
// cloneNode - clone 1 node trong DOM
// ví dụ: link.cloneNode()

const linkS = document.querySelector(".card");  
const linkSClone = linkS.cloneNode(true);
console.log(linkSClone);

console.log("------------17. hasChildNodes------------------"); 
// hasChildNodes - kiểm tra xem 1 node có node con hay không
// ví dụ: link.hasChildNodes()
const linkSs = document.querySelector(".card");
console.log(linkSs.hasChildNodes());

console.log("------------18. insertAdjacentText------------------"); 
// insertAdjacentText - thêm text vào 1 node trong DOM
// ví dụ: link.insertAdjacentText("beforebegin", "text")
// const linkSss = document.querySelector(".card");
// linkSss.insertAdjacentText("afterbegin", "afterbegin");
// linkSss.insertAdjacentText("beforebegin", "beforebegin");
// linkSss.insertAdjacentText("afterend", "afterend");
// linkSss.insertAdjacentText("beforeend", "beforeend");

console.log("------------19. insertAdjacentHTML------------------"); 
// insertAdjacentHTML - thêm html vào 1 node trong DOM
// ví dụ: link.insertAdjacentHTML("beforebegin", "<a href='https://www.google.com'>google</a>")
// const linkSsss = document.querySelector(".card");
// linkSsss.insertAdjacentHTML("afterbegin", "<a href='https://www.google.com'>google</a>");
// linkSsss.insertAdjacentHTML("beforebegin", "<a href='https://www.google.com'>google</a>");
// linkSsss.insertAdjacentHTML("afterend", "<a href='https://www.google.com'>google</a>");
// linkSsss.insertAdjacentHTML("beforeend", "<a href='https://www.google.com'>google</a>");



console.log("------------19. insertAdjacentElement------------------"); 
// insertAdjacentElement - thêm element vào 1 node trong DOM
// ví dụ: link.insertAdjacentElement("beforebegin", "a")

// create element mới thẻ a
const a = document.createElement("a");
const linkSssss = document.querySelector(".card");
linkSssss.insertAdjacentElement("afterbegin", a);
linkSssss.insertAdjacentElement("beforebegin", a);
linkSssss.insertAdjacentElement("afterend", a);
linkSssss.insertAdjacentElement("beforeend", a);



console.log("------------20. Traversing DOM------------------"); 
// Traversing DOM - duyệt DOM trong javascript 
// ví dụ: link.parentNode, link.parentElement, link.childNodes, link.children, link.nextSibling, link.previousSibling

console.log("------------20.1  parentNode------------------"); 
// parentNode - lấy node cha của 1 node trong DOM
// ví dụ: link.parentNode
const linkSsssss = document.querySelector(".card");
console.log(linkSsssss.parentNode);
console.log("------------20.2 parentElement ------------------"); 
// parentElement - lấy element cha của 1 node trong DOM
// ví dụ: link.parentElement
const linkSssssss = document.querySelector(".card");
console.log(linkSssssss.parentElement.parentElement);
console.log("------------20.3 removeChild ------------------"); 
// removeChild - xóa 1 node trong DOM
// ví dụ: link.removeChild(node)
const linkSsssssss = document.querySelector(".card");
linkSsssssss.removeChild(linkSsssssss.childNodes[1]);
console.log("------------20.4 nextElementSibling ------------------"); 
// nextElementSibling - lấy node kế bên của 1 node trong DOM
// ví dụ: link.nextElementSibling
const linkSssssssss = document.querySelector(".card");
console.log(linkSssssssss.nextElementSibling);
console.log("------------20.5 previousElementSibling ------------------");
// previousElementSibling - lấy node trước bên của 1 node trong DOM
// ví dụ: link.previousElementSibling
const linkSsssssssss = document.querySelector(".card");
console.log(linkSsssssssss.previousElementSibling);
console.log("------------20.6 firstElementChild ------------------");
// firstElementChild - lấy node con đầu tiên của 1 node trong DOM
// ví dụ: link.firstElementChild
const linkSssssssssss = document.querySelector(".card");
console.log(linkSssssssssss.firstElementChild);

console.log("------------20.7 childNodes vs children ------------------");
// childNodes - lấy tất cả các node con của 1 node trong DOM
// ví dụ: link.childNodes
const linkSsssssssssss = document.querySelector(".card");
console.log(linkSsssssssssss.childNodes);
// children - lấy tất cả các element con của 1 node trong DOM
// ví dụ: link.children
const linkSssssssssssss = document.querySelector(".card");
console.log(linkSssssssssssss.children);


console.log("------------bài tập Active Modal------------------");


// thêm thẻ div modal vào body afterbegin
// const template = `<div class="modal">
// <div class="modal-content">
//   <i class="fa fa-times modal-close"></i>
//   <div class="modal-desc">Câu hỏi về sở thích đã trở thành một câu hỏi kinh điển trong rất nhiều các bài thi tiếng Anh, cũng như trong giao tiếp hằng ngày. Bạn mới quen một anh Tây trên Tinder, và bạn muốn kéo dài câu chuyện nhiều hơn thay vì chỉ là “I like hot dogs”. Tương tự như vậy, trong phòng thi, với gần 15 phút ít ỏi để thể hiện năng lực ngôn ngữ của mình, bạn cần có nhu cầu phải nói nhiều hơn là “I love music”. Dưới đây là một chiến lược trả lời cách trả lời câu hỏi về sở thích hữu dụng mà bạn có thể áp dụng.</div>
//   <div class="modal-action">
//     <button class="modal-submit">Submit</button>
//     <button class="modal-cancel">Cancel</button>
//   </div>
// </div>
// </div>`


// document.body.insertAdjacentHTML ("afterbegin", template);

// // thêm class active vào modal
// const modal = document.querySelector(".modal");
// // thêm class sau 3s 
// setTimeout(() => {
//       modal.classList.add("is-show");
// }, 3000);

// // thêm class mới


   
// tạo các thẻ sau đây vào boy
// ví dụ : <div class="modal">
// <div class="modal-content">
//   <i class="fa fa-times modal-close"></i>
//   <div class="modal-desc">Câu hỏi về sở thích đã trở thành một câu hỏi kinh điển trong rất nhiều các bài thi tiếng Anh, cũng như trong giao tiếp hằng ngày. Bạn mới quen một anh Tây trên Tinder, và bạn muốn kéo dài câu chuyện nhiều hơn thay vì chỉ là “I like hot dogs”. Tương tự như vậy, trong phòng thi, với gần 15 phút ít ỏi để thể hiện năng lực ngôn ngữ của mình, bạn cần có nhu cầu phải nói nhiều hơn là “I love music”. Dưới đây là một chiến lược trả lời cách trả lời câu hỏi về sở thích hữu dụng mà bạn có thể áp dụng.</div>
//   <div class="modal-action">
//     <button class="modal-submit">Submit</button>
//     <button class="modal-cancel">Cancel</button>
//   </div>
// </div>
// </div> 

// tạo thẻ div mới vào body
const div = document.createElement("div");
div.classList.add("modal");
document.body.appendChild(div);
// tạo thẻ div mới vào div modal
const divModal = document.createElement("div");
divModal.classList.add("modal-content");
div.appendChild(divModal);
// tạo thẻ i mới vào div modal
const i = document.createElement("i");
i.classList.add("fa", "fa-times", "modal-close");
divModal.appendChild(i);
// tạo thẻ div mới vào div modal
const divModalDesc = document.createElement("div");
divModalDesc.classList.add("modal-desc");
divModal.appendChild(divModalDesc);

divModalDesc.textContent = "Câu hỏi về sở thích đã trở thành một câu hỏi kinh điển trong rất nhiều các bài thi tiếng Anh, cũng như trong giao tiếp hằng ngày. Bạn mới quen một anh Tây trên Tinder, và bạn muốn kéo dài câu chuyện nhiều hơn thay vì chỉ là “I like hot dogs”. Tương tự như vậy, trong phòng thi, với gần 15 phút ít ỏi để thể hiện năng lực ngôn ngữ của mình, bạn cần có nhu cầu phải nói nhiều hơn là “I love music”. Dưới đây là một chiến lược trả lời cách trả lời câu hỏi về sở thích hữu dụng mà bạn có thể áp dụng.";

// tạo thẻ div mới vào div modal
const divModalAction = document.createElement("div");
divModalAction.classList.add("modal-action");
divModal.appendChild(divModalAction);
// tạo thẻ button mới vào div modal
const buttonSubmit = document.createElement("button");
buttonSubmit.classList.add("modal-submit");
buttonSubmit.innerHTML = "Submit";
divModalAction.appendChild(buttonSubmit);
// tạo thẻ button mới vào div modal
const buttonCancel = document.createElement("button");
buttonCancel.classList.add("modal-cancel");
buttonCancel.innerHTML = "Cancel";
divModalAction.appendChild(buttonCancel);


// // thêm class active vào modal
// const modal = document.querySelector(".modal");
// // thêm class sau 3s 
// setTimeout(() => {
//       modal.classList.add("is-show");
// }, 3000);

// // thêm class mới


console.log("------------bài tập notification------------------");
// tạo hiển thị một thông báo sau đó mất đi và hiện lại sau 3s
// tạo một thẻ div notification vào body
// function check(title = "Thông báo") {

//       const teamplate1 = `<div class="noti">
//       <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png" class="noti-image">

//       <div class="noti-content">
//         <h3 class="noti-title">${title}</h3>
//         <p>Bạn đã đăng nhập thành công</p>
//         </div>
//         </div>`;
      
//         document.body.insertAdjacentHTML("afterbegin", teamplate1);

// }

// const randomData = ["thông báo 1", "thông báo 2", "thông báo 3", "thông báo 4", "thông báo 5"];
// let lastTitle = "";
// setInterval(function() {
//       const item = document.querySelector(".noti");
//       if (item) {
//             item.parentNode.removeChild(item);
//       }

//       // random trong mảng
//       const random = randomData[Math.floor(Math.random() * randomData.length)];
//       console.log(random);
//       if (lastTitle !== random) {
//             check(random);
//       }
//       lastTitle = random;
// }, 4000);

console.log("------------21. các thuộc tính liên quan đến offset------------------");
// cộng thêm boder
console.log("------------21.1 offsetWidth------------------");
// offsetWidth: là chiều rộng của phần tử, được tính bằng cách tính toán tổng chiều rộng của các phần tử con của phần tử đó.
const boxed = document.querySelector(".nhan");
console.log(boxed.offsetWidth);


console.log("------------21.1 offsetHeight------------------");
// offsetHeight: là chiều cao của phần tử, được tính bằng cách tính toán tổng chiều cao của các phần tử con của phần tử đó.
const boxed1 = document.querySelector(".nhan");
console.log(boxed1.offsetHeight);

console.log("------------21.2 offsetLeft ------------------");
// offsetLeft: là khoảng cách từ góc trái của phần tử đến góc trái của phần tử cha.
const boxed2 = document.querySelector(".nhan");
console.log(boxed2.offsetLeft);

console.log("------------21.2 offsetTop ------------------");
// offsetTop: là khoảng cách từ góc trên của phần tử đến góc trên của phần tử cha.
const boxed3 = document.querySelector(".nhan");
console.log(boxed3.offsetTop);


console.log("------------21.3 offsetParent ------------------");
// offsetParent: là phần tử cha của phần tử đang xét.
const boxed4 = document.querySelector(".nhan");
console.log(boxed4.offsetParent);


console.log("------------22. các thuộc tính liên quan đến client------------------");
// không cộng thêm boder
console.log("------------22.1 clientWidth ------------------");
// clientWidth: là chiều rộng của phần tử, được tính bằng cách tính toán tổng chiều rộng của các phần tử con của phần tử đó.
const boxed5 = document.querySelector(".nhan");
console.log(boxed5.clientWidth);

console.log("------------22.1 clientHeight ------------------");
// clientHeight: là chiều cao của phần tử, được tính bằng cách tính toán tổng chiều cao của các phần tử con của phần tử đó.
const boxed6 = document.querySelector(".nhan");
console.log(boxed6.clientHeight);

console.log("------------22.2 clientLeft ------------------");
// clientLeft: là khoảng cách từ góc trái của phần tử đến góc trái của phần tử cha.
const boxed7 = document.querySelector(".nhan");
console.log(boxed7.clientLeft);

console.log("------------22.3 clientTop ------------------");
// clientTop: là khoảng cách từ góc trên của phần tử đến góc trên của phần tử cha.
const boxed8 = document.querySelector(".nhan");
console.log(boxed8.clientTop);


console.log("------------23. các thuộc tính liên quan đến window------------------");
console.log("------------23.1 window.innerWidth ------------------");
// window.innerWidth: là chiều rộng của cửa sổ trình duyệt, không cộng thêm boder.
const boxed9 = document.querySelector(".nhan");
console.log(window.innerWidth);

console.log("------------23.2 window.innerHeight ------------------");
// window.innerHeight: là chiều cao của cửa sổ trình duyệt, không cộng thêm boder.
const boxed10 = document.querySelector(".nhan");
console.log(window.innerHeight);

console.log("------------23.3 window.outerWidth ------------------");
// window.outerWidth: là chiều rộng của cửa sổ trình duyệt, cộng thêm boder.
const boxed11 = document.querySelector(".nhan");
console.log(window.outerWidth);

console.log("------------23.4 window.outerHeight ------------------");
// window.outerHeight: là chiều cao của cửa sổ trình duyệt, cộng thêm boder.
const boxed12 = document.querySelector(".nhan");
console.log(window.outerHeight);

console.log("------------24. getBoundingClientRect() ------------------");
// getBoundingClientRect - lấy ra tọa độ, kích thước của phần tử
const boxed13 = document.querySelector(".nhan");
console.log(boxed13.getBoundingClientRect());

console.log("------------25. document.title ------------------");
// document.tittle: là tiêu đề của trang.
console.log(document.title);
document.title = "nhanh nhanh";
console.log(document.title);


console.log("------------26. document.head ------------------");
// document.head: là phần tử head của trang. để chèn css, đồ đồ
console.log(document.head);
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1");
document.head.appendChild(meta);
console.log(document.head);


console.log("------------26. inserBefore ------------------");
// inserBefore - chèn phần tử vào sau phần tử khác

const div2 = document.createElement("div");
div2.innerHTML = "world";
document.body.appendChild(div2);
const div3 = document.createElement("div");
div3.innerHTML = "nhanh";
document.body.insertBefore(div3, div2);
console.log(document.body);

console.log("------------27. replaceChild ------------------");
// replaceChild - thay thế phần tử
const div4 = document.createElement("div");
div4.innerHTML = "nhanh";
document.body.appendChild(div4);
const div5 = document.createElement("div");
div5.innerHTML = "nhen";
document.body.replaceChild(div5, div4);
console.log(document.body);





























































