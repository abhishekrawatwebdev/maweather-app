export const fetchCoordsWeather = async (lat, lon) => {
    let appidGeo = "b45cec15d4c670d6e31f5e37b4e47ad9";
    let response1 = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${appidGeo}&units=metric`)
    let data1 = await response1.json();
    return data1;
}

export const fetchCity = async (lat, lon) => {
    let appidGeo = "b45cec15d4c670d6e31f5e37b4e47ad9";
    let response1 = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${appidGeo}`)
    let data = await response1.json();
    return data;
}

export const searchCity = async (name) => {
    let response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=b45cec15d4c670d6e31f5e37b4e47ad9`)
    try {
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }

}