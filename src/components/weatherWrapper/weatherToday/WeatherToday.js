import { unixToDate, capitalizeFirst } from "../../../utils/Helpers"

import WindImg from "../../../assets/windImg.svg"

import "./WeatherToday.css"

const WeatherToday = ({ currentWeather, unitsStatus }) => {
    const currentWeatherCondition = currentWeather.weather[0]
    const weatherTemperature = currentWeather.main

    let currentUnit = unitsStatus ? "C" : "F"
    let currentUnitWind = unitsStatus ? "m/sec" : "mi/hr"

    return <div className="weather-today-wrapper">
        <div>
            <h2 className="weather-today-date">{unixToDate(currentWeather.dt)}</h2>
            <h2 className="weather-today-description">{capitalizeFirst(currentWeatherCondition.description)}</h2>

            <div className="weather-today-inner-temperature-wrapper">
                <img
                    src={`https://openweathermap.org/img/wn/${currentWeatherCondition.icon}@2x.png`}
                    alt={currentWeatherCondition.description}
                    className="weather-today-img"
                />
                <div className="weather-today-temp-wrapper">
                    <h2>{Math.ceil(weatherTemperature.temp)} {currentUnit}</h2>
                    <h4 className="weather-today-description">{`Feels like ${Math.ceil(weatherTemperature.feels_like)} ${currentUnit}`}</h4>
                    <h4>{`Min: ${Math.floor(weatherTemperature.temp_min)} ${currentUnit} - Max: ${Math.ceil(weatherTemperature.temp_max)} ${currentUnit} `}</h4>
                </div>
            </div>

            <div className="weather-today-wind-wrapper">
                <img src={WindImg} alt="Wind icon" className="weather-today-icon" />
                <h3>{`Wind Speed: ${currentWeather.wind.speed} ${currentUnitWind}`}</h3>
            </div>

        </div>
    </div>
}

export default WeatherToday