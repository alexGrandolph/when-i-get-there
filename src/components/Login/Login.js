import React from 'react'
import { useState } from 'react'

const Login = () => {
  
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  })

  function handleChange(event) {
    const { name, value } = event.target
    setLoginFormData(prevLoginFormData => ({
      ...prevLoginFormData,
      [name] : value
    }))
  }
  function handleSubmit() {

  }
  
  return (
    <div className='login-container'>
      
      <h1>Please Login to Your Account</h1>
      
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="email"
            placeholer="Email Address"
            onChange={handleChange}
            value={loginFormData.email}
          >
          </input>
          <input
            className="form-input"
            type="password"
            placeholer="Password"
            onChange={handleChange}
            value={loginFormData.password}
          >
          </input>
          <button className="form-submit">
            Login
          </button>


        </form>
      </div>
      
      
    </div>
  )
}

export default Login