import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext()

const initialUserState = {
  userId: "",
  userEmail: "",
  userApiKey: "",
}

export const ContextProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialUserState)
  const [userStored, setUserStored] = useState(false)

  const checkStorage = () => {
    if (localStorage.getItem("sessionId") === '' ||
      localStorage.getItem("sessionId") === null ) {
      return false
    } else {
      return true
    }
  }

  const addUserToStorage = (userId) => {
    const storedInt = parseInt(userId, 10)
    localStorage.setItem("sessionId", storedInt)
    setActiveUser(true)
  }

  return (
    <StateContext.Provider
      value={{
        activeUser,
        setActiveUser,
        currentUser,
        setCurrentUser,
        addUserToStorage,
        checkStorage,
      }}>

        {children} 

      </StateContext.Provider>
  )

}

export const useStateContext = () => useContext(StateContext);




// const defaultValues = {
//   user: {
//     id: "",
//     email: "",
//     apiKey: "",
//   },
//   setUser: () => { },
// }

// export const MyAppContext = createContext(defaultValues)

// export const MyAppContextProvider = ({ children }) => {
//   return <MyAppContext.Provider values={{
//     user,
//     setUser
//   }}>{children}</MyAppContext.Provider>
// }