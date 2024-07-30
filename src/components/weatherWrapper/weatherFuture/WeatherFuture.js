import { unixToDate } from "../../../utils/Helpers"

import "./WeatherFuture.css"

const WeatherFuture = ({ futureWeather, unitsStatus }) => {
    const futureWeatherInfo = futureWeather.weather[0]
    const futureWeatherTemp = futureWeather.main

    let currentUnit = unitsStatus ? "C" : "F"

    return <div className="weather-future-wrapper">
        <h4 className="future-weather-date">{unixToDate(futureWeather.dt)}</h4>

        <div className="weather-future-inner-wrapper">
            <img
                src={`https://openweathermap.org/img/wn/${futureWeatherInfo.icon}@2x.png`}
                alt={futureWeatherInfo.description}
                className="weather-future-img"
            />
            <div className="weather-future-temperature-wrapper">
                <h5>{Math.ceil(futureWeatherTemp.temp)} {currentUnit}</h5>
                <h5>{`Feels like ${Math.ceil(futureWeatherTemp.feels_like)} ${currentUnit}`}</h5>
                <h5>{`Min: ${Math.floor(futureWeatherTemp.temp_min)} ${currentUnit} - Max: ${Math.ceil(futureWeatherTemp.temp_max)} ${currentUnit} `}</h5>
            </div>
        </div>
    </div>
}

export default WeatherFuture