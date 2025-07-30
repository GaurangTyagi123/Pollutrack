import { useQuery } from '@tanstack/react-query'
import { getWeatherData } from '../services/apiWeather'

function useWeather(position) {
    const { data: weatherData, isPending, error } = useQuery({
        queryKey: ['weather'],
        queryFn: () => getWeatherData(position)
    })
    return {weatherData,isPending,error}
}

export default useWeather
