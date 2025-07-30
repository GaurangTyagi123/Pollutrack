import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getWeatherForecast } from '../services/apiWeather'

function useWeatherForecast(position) {
    const { data: forecastData, isPending, error } = useQuery({
        queryKey: ['forecast'],
        queryFn: () => getWeatherForecast(position)
    })
    return { forecastData, isPending, error }
}

export default useWeatherForecast
