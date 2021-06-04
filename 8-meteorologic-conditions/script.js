$(document).ready(function () {
  $("#btnWeather").click(searchInfo)
});

//Function to search the city
searchCity = function (city) {
  return new Promise(function (resolve, reject) {
    let answer;
    if (typeof city == 'string') {
      answer = $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=10e2c4ba8f02d372543f3f834fbcf33d");
    } else {
      reject();
    }

    if (answer) {
      resolve(answer);
    } else {
      reject();
    }
  });
}

//function to place the result into the HTML
placeIntoHtml = function (info) {
  const climaAtual = info.weather[0].description;
  const temperaturaAtual = (info.main.temp - 273.15).toFixed(2);
  const temperaturaMinima = (info.main.temp_min - 273.15).toFixed(2);
  const temperaturaMaxima = (info.main.temp_max - 273.15).toFixed(2);

  //showing the information 
  $("#result").html(
    `<p><b>Condição Atual: ${climaAtual}</b></p>
        <p><b>Temperatura Atual: ${temperaturaAtual} °C</b></p>
        <p><b>Temperatura máxima: ${temperaturaMaxima} °C</b></p>
        <p><b>Temperatura minima: ${temperaturaMinima}° C</b></p>
        <br><br>
        <p>&copy; 2021 João Lucas. All rights reserved.</p>
        `
  );
}

//function to search the necessary information
function searchInfo() {
  let city = $("input").val();
  //search the city typed by the user
  searchCity(city).then(placeIntoHtml).catch((err) => {
    return $("#result").html(
      `<p id="error">Cidade não encontrada!</p>`
    );
  });
}