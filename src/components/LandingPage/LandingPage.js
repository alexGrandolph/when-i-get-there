import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../../contexts/ContextProvider.js'

const LandingPage = () => {
  const { currentUser, activeUser, checkStorage } = useStateContext()

  const check = checkStorage()
  console.log(check)

  if (!check) {
    return (

      <div className="landing-page-wrapper">
      
        <div className="weather-search-container">
          <h1>Searh for Weather</h1>
          <Link to="/weather">
            click here
          </Link>
        </div>
        <hr />
        <div className="login-container">
          <h1>Login to Plan a RoadTrip</h1>
          <Link to="/login">
            login here
          </Link>
        </div>
        <div className="signup-container">
          <h1>Create an Account</h1>
          <Link to="/sign-up">
            sign up here
          </Link>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        good to go
      </div>
    )
  }
}

export default LandingPage