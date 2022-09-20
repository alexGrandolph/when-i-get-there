import React from 'react'
import { useState } from 'react'

const WeatherSearch = () => {
  
  const [cityName, setCityName] = useState("")
  
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
            name="cityName"
            onChange={handleChange}
            value={cityName}
          >
          </input>
          <button className="form-submit">
            Search
          </button>
      
      
      
      
        </form>

      </div>
    </div>
  )
}

export default WeatherSearch