import React, { useCallback, useEffect } from 'react'
import HeaderStyle from "../styles/Header.module.css"
import HeaderPanel from '../ui/HeaderPanel';

import { HiCloud } from "react-icons/hi2"
import { GiDustCloud } from "react-icons/gi";
import { TbUvIndex } from "react-icons/tb";
import useWeather from '../hooks/useWeather';
import Spinner from '../ui/Spinner';
import Error from '../ui/Error';


function Header({ position }) {
    const { weatherData, isPending, error } = useWeather(position)
    const sliderTrack = React.createRef();

    const moveSlideCache = useCallback((slide, nextSlide, amount) => {
        sliderTrack.current.style.translate = `-${amount} 0`
        nextSlide.classList.add('current-slide')
        slide.classList.remove('current-slide')

    }, [sliderTrack]);
    const moveToLeftCache = useCallback(() => {
        const currentSlide = document.querySelector('.current-slide');
        const slides = Array.from(sliderTrack.current.children);
        const index = slides.findIndex(slide => slide === currentSlide)
        const size = slides.length;
        const nextSlide = sliderTrack.current.children[(index + 1) % size]
        const amount = nextSlide.style.left;
        moveSlideCache(currentSlide, nextSlide, amount);

    }, [sliderTrack, moveSlideCache])

    useEffect(() => {
        let interval;
        if (sliderTrack.current) {
            const slides = Array.from(sliderTrack.current.children);
            const { width } = sliderTrack.current.getBoundingClientRect();
            slides[0].classList.add('current-slide')
            slides.forEach((slide, index) => {
                slide.style.left = `${width * index}px`
            })
            interval = setInterval(() => {


                const currentSlide = document.querySelector('.current-slide');
                const index = slides.findIndex(slide => slide === currentSlide)
                const size = slides.length;
                const nextSlide = sliderTrack.current.children[(index + 1) % size]
                const amount = nextSlide.style.left;
                moveToLeftCache(currentSlide, nextSlide, amount)
            }, 5000)
        }
        return () => {
            clearInterval(interval)
        }

    }, [sliderTrack, moveToLeftCache])
    if (isPending) return <Spinner />
    if (error) return <Error />
    const { current: { dust, pm2_5, uv_index }, current_units: { pm2_5: pm2_5_unit, dust: dust_unit, uv_index: uv_index_unit } } = weatherData;

    return (
        <header className={HeaderStyle.header} ref={sliderTrack} id='header'>
            <HeaderPanel title='aqi' value={`${pm2_5 ? pm2_5 : 432} ${pm2_5_unit} (pm 2.5)`} svgId='icon-cloud' background={{ img: 'aqi', color: 'rgba(5, 5, 7, 0.321)', border: 'rgb(47, 110, 116)' }} icon={<HiCloud />} />
            <HeaderPanel title='dust' value={`${dust ? dust : 1} ${dust_unit}`} svgId='icon-wind' background={{ img: 'windy', color: 'rgba(9, 137, 201, 0.32)', border: 'rgb(9, 137, 201)' }} icon={<GiDustCloud />} />
            <HeaderPanel title='UV Index' value={`${uv_index ? uv_index : 432} ${uv_index_unit}`} svgId='icon-sun' background={{ img: 'sunshine', color: 'rgba(236, 129, 13, 0.32)', border: 'rgba(236, 129, 13,.9)' }} icon={<TbUvIndex />} />
        </header>


    )
}

export default Header
