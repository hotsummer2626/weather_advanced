const getWindSpeed = (value, unit) => {
    switch (unit) {
        case "km/h":
            return `${(value * 3.6).toFixed(0)} km/h`;
        case "m/s":
            return `${value.toFixed(0)} m/s`;
        case "knots":
            return `${(value * 1.94384).toFixed(0)} knots`;
        default:
            return `${value} m/s`;
    }
};

export default getWindSpeed;
