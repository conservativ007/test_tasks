document.querySelector(".dropdown")
  .addEventListener("click", e => {
    e.currentTarget.classList.toggle("dropdown-active");

    console.log(e.target)
  });