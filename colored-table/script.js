const columnPages = document.getElementsByClassName("column-pages");
const columnBook = document.getElementsByClassName("column-book");

columnPages[0].addEventListener("click", (event) => {
  event.preventDefault();
  for (let i = 0; i < columnPages.length; i++) {
    if (columnBook[i].style.backgroundColor != "lightblue") {
      columnPages[i].style.backgroundColor = "lightgreen";
    } else {
      columnBook[i].style.backgroundColor = "white";
      columnPages[i].style.backgroundColor = "lightgreen";
    }
  }
});

columnBook[0].addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < columnBook.length; i++) {
    if (columnPages[i].style.backgroundColor != "lightgreen") {
      columnBook[i].style.backgroundColor = "lightblue";
    } else {
      columnPages[i].style.backgroundColor = "white";
      columnBook[i].style.backgroundColor = "lightblue";
    }
  }
});