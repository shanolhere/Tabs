let contents = document.querySelectorAll(".text");

let btns = document.querySelectorAll(".btn");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    contents[index].classList.add("active");
    btns[index].classList.add("active");
  });
});
