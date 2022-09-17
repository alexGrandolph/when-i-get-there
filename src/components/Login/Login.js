import React from 'react'

const Login = () => {
  
  function handleChange() {

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
            value={'email-state'}
          >
          </input>
          <input
            className="form-input"
            type="password"
            placeholer="Password"
            onChange={handleChange}
            value={'password-state'}
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