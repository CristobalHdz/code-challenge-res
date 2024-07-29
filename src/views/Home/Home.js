import WeatherWrapper from "../../components/weatherWrapper/WeatherWrapper"
import "./Home.css"

const Home = () => {
    return (
        <div className="home-weather-wrapper" aria-label="Vista principal de busqueda de clima">
            <WeatherWrapper />
        </div>)
}
export default Home