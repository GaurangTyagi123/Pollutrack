const BASE_URL_AIR_QUALITY = "https://air-quality-api.open-meteo.com/v1"
const BASE_URL_FORECAST = "https://api.open-meteo.com/v1"

async function getWeatherData(position) {
    try {
        const options = {
            longitude: position[0],
            latitude: position[1],
            current: ["pm2_5", "dust", "uv_index"]
        }
        const res = await fetch(`${BASE_URL_AIR_QUALITY}/air-quality?${new URLSearchParams(options)}`);
        const data = await res.json();
        if (data)
            return data;
        throw new Error("There was an error")
    }
    catch (err) {
        throw new Error(err)
    }
}
async function getWeatherForecast(position) {
    try {
        const options = {
            longitude: position[0],
            latitude: position[1],
            forecast_days: 3,
            daily: ["temperature_2m_max", "temperature_2m_min", "uv_index_max","precipitation_sum"],
            current : ['is_day']
        }
        const res = await fetch(`${BASE_URL_FORECAST}/forecast?${new URLSearchParams(options)}`);
        const data = await res.json();
        if (data)
            return data;
        throw new Error("There was an error")
    }
    catch (err) {
        throw new Error(err)
    }
}
export { getWeatherData, getWeatherForecast }