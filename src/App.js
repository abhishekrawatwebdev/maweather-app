/* eslint-disable no-unreachable */
import React, { useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import MiniQuantities from './components/MiniQuantities';
import { fetchCoordsWeather, fetchCity, searchCity } from './data/location';
import c7 from './icons/cloud/c7.png'
import s6 from './icons/sun/s6.png'
import { Icon_setter } from './utilities/IconsSetter';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState();
  const [cityData, setCityData] = useState();
  const [weatherIcon, setWeatherIcon] = useState()


  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    const data = await searchCity(cityName);
    if (data.length === 0) {
      alert('no cities found')
      window.location.reload()
    } else {
      console.log(data);
      const weatherData = await fetchCoordsWeather(data[0].lat, data[0].lon);
      console.log(weatherData);
      setWeatherData(weatherData)
      const cityData = await fetchCity(data[0].lat, data[0].lon)
      setCityData(cityData)
      const icon = Icon_setter(weatherData.current.weather[0].icon)
      setWeatherIcon(icon)
      setIsLoading(false)
    }

  }
  const setCoords = async () => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        let positions = position.coords;
        setIsLoading(true)
        const cityData = await fetchCity(positions?.latitude, positions?.longitude)
        setCityData(cityData)
        setIsLoading(false)
        const weatherData = await fetchCoordsWeather(positions?.latitude, positions?.longitude);
        // console.log(weatherData);
        setWeatherData(weatherData)
        const icon = Icon_setter(weatherData.current.weather[0].icon)
        setWeatherIcon(icon)
        setIsLoading(false)
      })
    }
    else {
      alert('please allow')
    }

  }
  useState(() => {
    setCoords()

  }, [])
  return (
    <div>
      {
        isLoading && <Loader />
      }
      <center>
        {(weatherData && <div>
          <div className="section">
            <div className="topSearchbar">
              <h5>MaWeather</h5>
              <div className="search">
                <form action="" onSubmit={(e) => { handleSubmit(e) }} style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}>
                  <input type="text" className="text" placeholder="Search your city" id="city-name" value={cityName} onChange={(e) => { setCityName(e.target.value) }} />
                  <button value="submit" type='submit' className="submit">search</button>
                </form>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h1 className="cityName" id="city"><span id="cityName">{cityData[0].name}</span>, <span id="country">{cityData[0].country}</span></h1>
            </div>
            <p id="description">{weatherData.current.weather[0].description}</p>
            <div className="temp-wrapper">
              <h1 className="temperature" id="temperature">{weatherData.current.temp}</h1>
              <div><img id="weatherIcon" src={weatherIcon} alt="weather-Icon" /></div>
            </div>


            <br />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <MiniQuantities img={c7} name="Humidity" unit='%' quantity={weatherData.current.humidity} />
              <MiniQuantities img={s6} name="Wind" unit='m/s' quantity={weatherData.current.wind_speed} />
              <MiniQuantities img={s6} name="Pressure" unit='hPa' quantity={weatherData.current.pressure} />
            </div>
          </div>
          <div className="forecast-Section">

          </div>
        </div>)}
      </center>
    </div>
  );
}

export default App;
