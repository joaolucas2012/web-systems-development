$(document).ready(function () {
  $("#btn").click((event) => {
    event.preventDefault();

    const Elements = [];

    $("input").each((index, element) => {
      Elements.push(`<li>${element.value}</li>`);
      element.value = "";
    });

    $("ol").html(Elements);
    $("input").each((index, value) => {
      Elements.push(`<li>${value.value}</li>`);
    });
  });
});