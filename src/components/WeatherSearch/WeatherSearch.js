import React from 'react'
import { useState } from 'react'

export const fetchPlace = async (text) => {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=pk.eyJ1IjoiYWxleGdyYW5kb2xwaCIsImEiOiJjbDhhZmswbzcwMWpmM29wN2szZnJ3azUxIn0.0trTorLSI_-FVdoMmpc6cw&cachebuster=1625641871908&autocomplete=true&types=place`
    );
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  } catch (err) {
    return { error: "Unable to retrieve places" };
  }
};

async function getForecast(city, country) {
  return fetch(`http://localhost:5000/api/v1/forecast?location=${city},${country}`)
  .then(res => {
    // console.log(res)
    return res.json();
  })
  .then(data => {
    // console.log(data.data.attributes)
    return data.data.attributes
  })
}


const WeatherSearch = () => {
  
  const [city, setCity] = useState("");
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");

  const handleCityChange = async (e) => {
    setCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };

  async function handleSubmit(event ){
    event.preventDefault();
   
    const cityName = city.split(', ')[0]
    const country = city.split(', ').pop()
    const result = await getForecast(cityName, country);
    console.log(result.current_weather.temperature)
  }

  return (
    <form className = "form" onSubmit = { handleSubmit }>
      <div className="placesAutocomplete">
        <div className="placesAutocomplete__inputWrap">
          <label htmlFor="city" className="label">
            Your city
            {autocompleteErr && (
              <span className="inputError">{autocompleteErr}</span>
            )}
          </label>
          <input
            list="places"
            type="text"
            id="city"
            name="city"
            onChange={handleCityChange}
            value={city}
            required
            pattern={autocompleteCities.join("|")}
            autoComplete="off"
          />
          <datalist id="places">
            {autocompleteCities.map((city, i) => (
              <option key={i}>{city}</option>
            ))}
          </datalist>
          <span className="placesAutocomplete__hint">
            *start typing and choose your city from the given options
          </span>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );




}

export default WeatherSearch




// const [citySearch, setCitySearch] = useState({
//   cityName: "",
// })

// console.log(citySearch.cityName)

// function handleChange(event) {
//   const { name, value } = event.target;
//   setCitySearch(prevCitySearch => ({
//     ...prevCitySearch,
//     [name] : value
//   }))
// }

// function handleSubmit(event) {

// }

// return (
  
//   <div className="weather-search-container">
//     WeatherSearch
    
//     <div className="form-container">
//       <form className="form" onSubmit={handleSubmit}>
//         <input
//           className="form-input"
//           type="text"
//           placeholer="Enter a City"
//           name="cityName"
//           onChange={handleChange}
//           value={citySearch.cityName}
//         >
//         </input>
//         <button className="form-submit">
//           Search
//         </button>
//       </form>
//     </div>

//     <div className="current-weather-container">
//       Current Weather
//     </div>

//     <div className="hourly-forecast-container">
//       Hourly Forecast
//     </div>

//     <div className="daily-forecast-container">
//       Daily Forecast
//     </div>


//   </div>
// )