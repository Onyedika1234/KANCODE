let menuList = document.getElementById("menuList");
let menuIcon = document.getElementById("icon");
menuList.style.maxHeight = "0px";
menuIcon.addEventListener("click", () => {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "600px";
    menuList.style.display = "block";
  } else {
    menuList.style.maxHeight = "0px";
    menuList.style.display = "none";
  }
});
const body = document.querySelector(".bodycontent");
const header = document.querySelector(".header");
const wid = document.querySelector(".wid");

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show1");
    }
  });
});
observer1.observe(header);
observer1.observe(body);
observer1.observe(wid);

const widtxtcol = document.querySelector(".txtcol");
const btn1 = document.querySelector("#btn1");
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show2");
    }
  });
});
observer2.observe(widtxtcol);
observer2.observe(btn1);

const widimgcol = document.querySelector("#img");
const btn2 = document.querySelector("#btn2");
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show3");
    }
  });
});
observer3.observe(widimgcol);
observer3.observe(btn2);

const project1 = document.querySelector(".project1");
const project2 = document.querySelector(".project2");
const project3 = document.querySelector(".project3");
const project4 = document.querySelector(".project4");

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // entry.target.classList.toggle("show5", entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("show4");
    }
  });
});

observer5.observe(project1);
observer5.observe(project2);
observer5.observe(project3);
observer5.observe(project4);
