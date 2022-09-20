import React from 'react'
import { useState } from 'react'

const WeatherSearch = () => {
  
  const [citySearch, setCitySearch] = useState({
    cityName: "",
  })
  
  console.log(citySearch.cityName)

  function handleChange(event) {
    const { name, value } = event.target;
    setCitySearch(prevCitySearch => ({
      ...prevCitySearch,
      [name] : value
    }))
  }

  function handleSubmit(event) {

  }

  return (
    
    <div className="weather-search-container">
      WeatherSearch
      
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            placeholer="Enter a City"
            name="cityName"
            onChange={handleChange}
            value={citySearch.cityName}
          >
          </input>
          <button className="form-submit">
            Search
          </button>
        </form>
      </div>

      <div className="current-weather-container">
        Current Weather
      </div>

      <div className="hourly-forecast-container">
        Hourly Forecast
      </div>

      <div className="daily-forecast-container">
        Daily Forecast
      </div>


    </div>
  )
}

export default WeatherSearch