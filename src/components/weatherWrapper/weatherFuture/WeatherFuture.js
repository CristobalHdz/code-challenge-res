import { unixToDate } from "../../../utils/Helpers"

import "./WeatherFuture.css"

const WeatherFuture = ({ futureWeather }) => {
    const futureWeatherInfo = futureWeather.weather[0]
    const futureWeatherTemp = futureWeather.main

    return <div className="weather-future-wrapper">
        <h4 className="future-weather-date">{unixToDate(futureWeather.dt)}</h4>

        <div className="weather-future-inner-wrapper">
            <img
                src={`https://openweathermap.org/img/wn/${futureWeatherInfo.icon}@2x.png`}
                alt={futureWeatherInfo.description}
                className="weather-future-img"
            />
            <div className="weather-future-temperature-wrapper">
                <h5>{Math.ceil(futureWeatherTemp.temp)} C</h5>
                <h5>{`Feels like ${Math.ceil(futureWeatherTemp.feels_like)} C`}</h5>
                <h5>{`Min: ${Math.floor(futureWeatherTemp.temp_min)} C - Max: ${Math.ceil(futureWeatherTemp.temp_max)} C `}</h5>
            </div>
        </div>
    </div>
}

export default WeatherFuture