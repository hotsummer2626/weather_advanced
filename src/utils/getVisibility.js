const getVisibility = (value, unit) => {
    switch (unit) {
        case "m":
            return `${value} m`;
        case "km":
            return `${value / 1000} km`;
        default:
            return `${value} m`;
    }
};

export default getVisibility;
