const getPressure = (value, unit) => {
    switch (unit) {
        case "hPa":
            return `${value.toFixed(0)} hPa`;
        case "inches":
            return `${(value * 0.02953).toFixed(0)} inHg`;
        case "kPa":
            return `${(value / 10).toFixed(0)} kPa`;
        case "mm":
            return `${value * 0.75006} mmHg`;
        default:
            return `${value.toFixed(0)} hPa`;
    }
};

export default getPressure;
