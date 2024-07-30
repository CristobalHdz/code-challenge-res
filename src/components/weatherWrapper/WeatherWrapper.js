import { useState } from "react"

import WeatherToday from "./weatherToday/WeatherToday"
import WeatherFuture from "./weatherFuture/WeatherFuture"
import { capitalizeFirst } from "../../utils/Helpers"

import "./WeatherWrapper.css"

const WeatherWrapper = () => {
    const weatherApiKey = process.env.REACT_APP_API_KEY
    // Searched city
    const [inputCity, setInputCity] = useState("")
    // Coordiantes of the searched city
    const [coordinates, setCoordinates] = useState({ lat: 0, long: 0, name: "" })
    // Information of the searched city
    const [weatherInfo, setWeatherInfo] = useState([])
    // Loading state when fetching info from searched city
    const [loading, setLoading] = useState(false)
    // Error msg when there searched city doesn't exist
    const [errorText, setErrorText] = useState(false)

    // Get the location lat and long
    const getLocationParams = async (event) => {
        setInputCity(event.target.value)
        await fetch(`https://search.reservamos.mx/api/v2/places?q=${inputCity}`)
            .then(response => response.json())
            .then(data => {
                const cityType = data.filter(item => item.result_type === "city")
                if (cityType.length > 0) {
                    setCoordinates({
                        lat: data[0]?.lat,
                        long: data[0]?.long,
                        name: data[0]?.city_slug
                    })
                    setErrorText(false)
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Get the weather based on the city's coordinates
    const submitCityInfo = async () => {
        if (coordinates.name.length === 0) {
            return setErrorText(true)
        }

        setLoading(true)
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${coordinates.lat}&lon=${coordinates.long}&appid=${weatherApiKey}`)
            .then(response => response.json())
            .then(result => setWeatherInfo(result.list.filter((item, index) => {
                return index === 0 || index % 7 === 0
            })))
            .finally(setLoading(false))
            .catch(error => console.error('Error fetching data:', error));
    }

    const cityWithoutSymbols = (cityName) => {
        return cityName.replace(/-/g, ' ')
    }

    return <div className="weather-outer-wrapper">
        {loading && <div>Loading...</div>}
        {!loading &&
            <div className="input-wrapper">
                <input placeholder="Enter your city's name" onChange={(e) => { getLocationParams(e) }} />
                <button onClick={() => { submitCityInfo() }}>Submit</button>
                {errorText && <div><p>Please provide a valid city!</p></div>}
            </div>
        }
        {weatherInfo.length > 0 && <h1>{cityWithoutSymbols(capitalizeFirst(coordinates.name))}</h1>}

        {weatherInfo.length > 0 && <div className="weather-information-inner-wrapper">
            {/* Today's Weather */}
            <WeatherToday currentWeather={weatherInfo[0]} />

            {/* Future Weather */}
            <div className="weather-future-information">{weatherInfo.slice(1).map((info, index) => {
                return <WeatherFuture key={index} futureWeather={info} />
            })}
            </div>
        </div>}

    </div>
}
export default WeatherWrapper