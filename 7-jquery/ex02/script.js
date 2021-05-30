$(document).ready(function () {
  $("#btn").click((event) => {
    event.preventDefault();
    let newRow = $("<tr cellpadding=4 cellspacing=2></tr>");
    $("input").each((index, element) => {
      let Data = $("<td></td>");
      Data.html(element.value);
      newRow.append(Data);
      element.value = "";
      element.placeholder = "";
    });
    $("#catalogo").append(newRow);
  });
});