import axios from "axios";

const getCurrentWeather = (coordinate) =>
    axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.lat}&lon=${coordinate.lon}&appid=${process.env.apiKey}`
    ).then((res) => res.data);

export default getCurrentWeather;
