import axios from "axios";

const getCities = (cityName) =>
    axios(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=4&appid=${process.env.apiKey}`
    ).then((res) => res.data);

export default getCities;
