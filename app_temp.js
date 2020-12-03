function convertToCelsius(num) {
  var celsius = (num - 32) / 1.8;
  document.getElementById("outputCelsius").innerHTML =
    Math.round(celsius * 100) / 100 + "°";
}

function convertToFarenheight(num) {
  var farenheight = num * 1.8 + 32;
  document.getElementById("outputFarenheight").innerHTML =
    Math.round(farenheight * 100) / 100 + "°";
}
function refreshPage() {
  window.location.reload();
}
