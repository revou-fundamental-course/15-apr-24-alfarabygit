//membuat function untuk tombol konversi suhu
function convert() {
  //variable for logic conversion temperature and formula
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  var temperature = parseFloat(document.getElementById("temperature").value);

  let convertedValue;
  let resultUnit;

  //set logic conversion temperature with conditional
  switch (fromUnit) {
    case "C":
      if (toUnit === "F") {
        convertedValue = (temperature * 9) / 5 + 32;
        resultUnit = "F";
        document.getElementById("formula").textContent = `(${temperature}° * 9) / 5 + 32 = ${convertedValue}°F`;
      } else if (toUnit === "K") {
        convertedValue = temperature + 273.15;
        resultUnit = "K";
        document.getElementById("formula").textContent = `${temperature}° + 273.15 = ${convertedValue}°K`;
      } else if (toUnit === "R") {
        convertedValue = (temperature * 9) / 5 + 491.67;
        resultUnit = "R";
        document.getElementById("formula").textContent = `(${temperature}° * 9) / 5 + 491.67 = ${convertedValue}°R`;
      } else {
        convertedValue = temperature;
        resultUnit = "C";
        document.getElementById("formula").textContent = `${temperature}°Celcius`;
      }
      break;

    case "F":
      if (toUnit === "C") {
        convertedValue = ((temperature - 32) / 5) * 9;
        resultUnit = "C";
        document.getElementById("formula").textContent = `((${temperature}° - 32) / 5) * 9 = ${convertedValue}°C`;
      } else if (toUnit === "K") {
        convertedValue = ((temperature - 32) / 5) * 9 + 273.15;
        resultUnit = "K";
        document.getElementById("formula").textContent = `((${temperature}° - 32) / 5) * 9 + 273.15 = ${convertedValue}°K`;
      } else if (toUnit === "R") {
        convertedValue = temperature + 459.67;
        resultUnit = "R";
        document.getElementById("formula").textContent = `${temperature}° + 459.67 = ${convertedValue}°R`;
      } else {
        convertedValue = temperature;
        resultUnit = "F";
        document.getElementById("formula").textContent = `${temperature}°Fahrenheit`;
      }
      break;

    case "K":
      if (toUnit === "C") {
        convertedValue = temperature - 273.15;
        resultUnit = "C";
        document.getElementById("formula").textContent = `${temperature}° - 273.15 = ${convertedValue}°C`;
      } else if (toUnit === "F") {
        convertedValue = temperature - (273.15 * 9) / 5 + 32;
        resultUnit = "F";
        document.getElementById("formula").textContent = `${temperature}° - (273.15 * 9) / 5 + 32 = ${convertedValue}°F`;
      } else if (toUnit === "R") {
        convertedValue = (temperature * 9) / 5;
        resultUnit = "R";
        document.getElementById("formula").textContent = `(${temperature}° * 9 ) / 5 = ${convertedValue}°R`;
      } else {
        convertedValue = temperature;
        resultUnit = "K";
        document.getElementById("formula").textContent = `${temperature}°Kelvin`;
      }
      break;

    case "R":
      if (toUnit === "C") {
        convertedValue = ((temperature - 491.67) * 5) / 9;
        resultUnit = "C";
        document.getElementById("formula").textContent = `((${temperature}° - 491.67) * 5) / 9 = ${convertedValue}°C`;
      } else if (toUnit === "F") {
        convertedValue = temperature - 459.67;
        resultUnit = "F";
        document.getElementById("formula").textContent = `${temperature}° - 459.67 = ${convertedValue}°F`;
      } else if (toUnit === "K") {
        convertedValue = (temperature * 5) / 9;
        resultUnit = "K";
        document.getElementById("formula").textContent = `(${temperature}° * 5 ) / 9 = ${convertedValue}°K`;
      } else {
        convertedValue = temperature;
        resultUnit = "R";
        document.getElementById("formula").textContent = `${temperature}°Rankine`;
      }
      break;
  }
  document.getElementById("result").value = convertedValue.toFixed(2) + " " + resultUnit;
}
