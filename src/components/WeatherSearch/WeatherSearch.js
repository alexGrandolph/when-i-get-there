import React from 'react'
import { useState } from 'react'

const WeatherSearch = () => {
  
  const [citySearch, setCitySearch] = useState("")
  
  function handleChange(event) {

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
            name="citySearch"
            onChange={handleChange}
            value={citySearch}
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