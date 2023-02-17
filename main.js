let lis = document.querySelectorAll("ul li");
let btn = document.getElementsByTagName("button")[0];
let allow = false;
let thankPage = document.getElementsByClassName("thank")[0];
let ratePage = document.getElementsByClassName("rate")[0];
let choise = document.querySelector(".thank .choise span");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    window.localStorage.setItem("star", li.innerHTML);
    allow = true;
  });
});

btn.addEventListener("click", () => {
  if (allow) {
    choise.textContent = window.localStorage.getItem("star");
    thankPage.style.display = "block";
    ratePage.style.display = "none";
  }
});
