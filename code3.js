let sun = document.querySelector(".sun");
let linkdin = document.querySelector(".linkdin");
let sunss = document.querySelector(".sunss");
sunss,sun.addEventListener("click", function () {
  let b = document.querySelector("body");

  b.classList.toggle("body");
  let n = document.querySelector(".navbar");
  n.classList.toggle("body");

  let c = document.querySelector(".contact_body");
  c.classList.toggle("cont");
  let sun_i = document.querySelector(".sun i");
  sun_i.classList.toggle("ss");
  linkdin.classList.toggle("lin");
  let hamburgur = document.querySelector(".hamburgur");
  hamburgur.classList.toggle("lin");
 
let mobileNav = document.querySelector(".mobile_nav");

hamburgur.addEventListener("click", function () {
  mobileNav.classList.toggle("active"); //  new line
});
});

let hamburgur = document.querySelector(".hamburgur");
let mobileNav = document.querySelector(".mobile_nav");

hamburgur.addEventListener("click", function () {
  mobileNav.classList.toggle("active"); //  new line
});

let form=document.querySelector(".forms");
form.addEventListener("submit",function(){
  event.preventDefault();
  
})
