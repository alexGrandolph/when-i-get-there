import React from 'react'
import { useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider.js'
import { Link } from 'react-router-dom'


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
      return data.data;
    })
}


const Login = () => {
  const { currentUser, setCurrentUser, activeUser, setActiveUser, addUserToStorage, checkStorage } = useStateContext()
  console.log(currentUser)
  const check = checkStorage()
  console.log(check)

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
    const userId = result.id
    const userEmail = result.attributes.email
    const userApiKey =  result.attributes.api_key
    
    addUserToStorage(userId)

    setCurrentUser(prevCurrentUser => ({
      ...prevCurrentUser,
      userId: userId,
      userEmail: userEmail,
      userApiKey: userApiKey,
    }))
    const check = checkStorage()
    console.log(check)
  }


  
  return (
    <div className='login-container'>
      <Link to="/">
        HOme
      </Link>
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