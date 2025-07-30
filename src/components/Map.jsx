import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { getWeatherData } from '../services/apiWeather';
import { HiCloud } from 'react-icons/hi2';
import { GiDustCloud } from 'react-icons/gi';
import { TbUvIndex } from 'react-icons/tb';
import useWeather from '../hooks/useWeather';
import { getLocation } from '../services/apiGeolocation';

const popupHeadingStyle = {
    fontSize: "1.2rem",
    fontWeight: 200,
    textTransform: "uppercase",
    color: "#eee",
    textAlign: "center",
    background: "linear-gradient(to right,rgba(44, 44, 219,1),rgba(44, 44, 219,.8))",
    padding:".6rem",
    letterSpacing: ".3rem"
}
const popupIconStyle = {
    height: "3rem",
    width: "3rem",
    fill: "rgba(44, 44, 219,.5)",
    color: "rgba(44, 44, 219,.2)"

}
const popupContent = {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#777"
}
function Map({ position, state }) {
    const { weatherData, isPending, error } = useWeather(position)

    // Here location is the latitude and longitude of the map location where the user clicked
    const [location, setLocation] = useState([])
    const [current, setCurrentData] = useState(null)
    const [locationData, setLocationData] = useState(null)


    const handleMapClick = async e => {
        const { current } = await getWeatherData([e.latlng.lat, e.latlng.lng])
        const { principalSubdivision } = await getLocation(e.latlng.lat, e.latlng.lng)
        setLocationData(null)
        setCurrentData({ ...current, state: principalSubdivision })
        setLocation([e.latlng.lat, e.latlng.lng])
    }

    useEffect(() => {
        if (!isPending && !error) {
            const { current } = weatherData;
            setLocationData(current)
        }
    }, [error, isPending, weatherData])
    if (!position) return;
    return (
        <div id="map" style={{ height: "90vh", width: "100%", paddingInline: "10px", outline: "2px solid blue", clipPath: "polygon(0 10%,100% 0,100% 80%,0 100%)" }}>
            <MapContainer center={position} zoom={8} scrollWheelZoom={true} style={{ height: "100%" }} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                <Marker position={location.length ? location : position}>
                    <Popup >
                        <h1 style={popupHeadingStyle}>{current?.state || state}</h1>
                        <p style={popupContent}><b><HiCloud style={popupIconStyle} /></b> : {locationData?.pm2_5 || current?.pm2_5}</p>
                        <p style={popupContent}><b><GiDustCloud style={popupIconStyle} /></b> : {locationData?.dust || current?.dust}</p>
                        <p style={popupContent}><b><TbUvIndex style={popupIconStyle} /></b> : {locationData?.uv_index || current?.uv_index}</p>
                    </Popup>
                </Marker>
                <DetectClick onMapClick={handleMapClick} />
            </MapContainer>
        </div>
    )
}
function DetectClick({ onMapClick }) {
    useMapEvents({
        click: (e) => onMapClick(e)
    })
    return null
}
export default Map
