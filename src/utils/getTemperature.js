const getTemperature = (kelvin, unit) => {
    switch (unit) {
        case "celsius":
            return `${(kelvin - 273.15).toFixed(0)}°C`;
        case "fahrenheit":
            return `${(((kelvin - 273.15) * 9) / 5 + 32).toFixed(0)}°F`;
        default:
            return `${(kelvin - 273.15).toFixed(0)}°C`;
    }
};

export default getTemperature;
