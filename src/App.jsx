
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import AppLayout from "./ui/AppLayout";

// // const BASE_URL = 'https://watherappserver-production.up.railway.app'
// const LOCATION_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
// const BASE_URL = 'http://localhost:5000'
// function App() {
//   const [position, setPosition] = useState(null)
//   const [country, setCountry] = useState("india")
//   const [region, setRegion] = useState('')

//   useEffect(() => {
//     if (!navigator.geolocation)
//       throw new Error("Browser does not support geolocation")
//     navigator.geolocation.getCurrentPosition((pos) => {
//       setPosition({
//         lat: pos.coords.latitude,
//         lng: pos.coords.longitude,
//       })
//     }, (err) => {
//       throw new Error("Location not found" + err)
//     })

//   }, []);
//   useEffect(() => {
//     if (!position) return;
//     const abortController = new AbortController()
//     axios.get(`${LOCATION_URL}?latitude=${position.lat}&longitude=${position.lng}`, { signal: abortController.signal }).then(response => {
//       const { city, locality, countryCode } = response.data
//       console.log(response.data)
//       if (city || locality) {
//         setRegion(city || locality)
//         setCountry(countryCode)
//       }
//     })
//     return () => abortController.abort()
//   }, [position])
//   useEffect(() => {
//     if (!region) return;
//     axios.get(`${BASE_URL}/card_data/${region}`).then(response => {
//       const { data } = response;
//       setCardData(data.cardData)
//     }).catch(err => {
//       alert(err)
//     })
//   }, [region])

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AppLayout/>
    </QueryClientProvider>
  )
}

export default App;
