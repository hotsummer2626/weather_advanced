import axios from "axios";

const getTodayForecast = (coordinate) =>
    axios(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinate.lat}&lon=${coordinate.lon}&cnt=6&appid=${process.env.apiKey}`
    ).then((res) => res.data);

export default getTodayForecast;
