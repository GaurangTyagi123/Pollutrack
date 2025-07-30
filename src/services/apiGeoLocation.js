const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function apiGeoLocation(setPosition) {
    if (!navigator.geolocation) setPosition(null)
    navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setPosition({ lat, lng })
    })
}
async function getLocation(latitude = null, longitude = null) {
    const fetchUrl = latitude && longitude ? `${BASE_URL}?latitude=${latitude}&longitude=${longitude}` : BASE_URL
    try {
        const res = await fetch(fetchUrl);
        const data = await res.json();
        if (data)
            return data;
        throw new Error("There was an error")
    }
    catch (err) {
        throw new Error(err.message)
    }
}

export { getLocation }
export default apiGeoLocation
