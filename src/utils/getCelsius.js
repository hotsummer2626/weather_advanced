const getCelsius = (kelvin, decimalPlace) =>
    `${(kelvin - 273.15).toFixed(decimalPlace)}℃`;

export default getCelsius;
