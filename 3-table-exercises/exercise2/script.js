const formulario = document.getElementById("form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const typedData = document.getElementsByTagName("input");
  const listData = [];
  for (let i = 0; i < typedData.length; i++) {
    listData.push(`<li>${typedData[i].value}</li>`);
    typedData[i].value = "";
  }
  document.getElementById("list").innerHTML = listData.join("\n");
});