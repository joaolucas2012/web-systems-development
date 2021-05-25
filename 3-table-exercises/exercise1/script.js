const colPages = document.getElementsByClassName("pages");
const colBooks = document.getElementsByClassName("books");

colPages[0].addEventListener("click", (event) => {
  event.preventDefault();
  for (let i = 0; i < colPages.length; i++) {
    if (colBooks[i].style.backgroundColor != "lightblue") {
      colPages[i].style.backgroundColor = "lightgreen";
    } else {
      colBooks[i].style.backgroundColor = "white";
      colPages[i].style.backgroundColor = "lightgreen";
    }
  }
});

colBooks[0].addEventListener("click", (event) => {
  event.preventDefault();
  for (let i = 0; i < colBooks.length; i++) {
    if (colPages[i].style.backgroundColor != "lightgreen") {
      colBooks[i].style.backgroundColor = "lightblue";
    } else {
      colPages[i].style.backgroundColor = "white";
      colBooks[i].style.backgroundColor = "lightblue";
    }
  }
});