import axios from "axios";

const getWeekForecast = (coordinate) =>
    axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&exclude=minutely,hourly&appid=${process.env.apiKey}`
    ).then((res) => res.data);

export default getWeekForecast;
