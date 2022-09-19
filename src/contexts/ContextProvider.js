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
  // const [currentUser, setCurrentUser] = useState()

  const addUserToStorage = (userId) => {
    // const sessionId = userID
    localStorage.setItem("sessionId", userId)
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