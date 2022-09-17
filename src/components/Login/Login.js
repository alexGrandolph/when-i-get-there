import React from 'react'
import { useState } from 'react'


async function loginUser(email, password) {  
  return fetch(`http://localhost:5000/api/v1/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "email": `${email}`,
      "password": `${password}`
    })
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      // console.log(data.data);
      return data.data
    })
}


const Login = () => {
  const [currentUser, setCurrentUser] = useState()

  console.log(currentUser?.id)


  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  })

  function handleChange(event) {
    const { name, value } = event.target
    setLoginFormData(prevLoginFormData => ({
      ...prevLoginFormData,
      [name] : value
    }));
  }

   async function handleSubmit(event) {
    event.preventDefault();
    const email = loginFormData.email
    const password = loginFormData.password
    const result = await loginUser(
      email,
      password
    );
    console.log(result.id)
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
            name="email"
            onChange={handleChange}
            value={loginFormData.email}
          >
          </input>
          <input
            className="form-input"
            type="password"
            placeholer="Password"
            name="password"
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