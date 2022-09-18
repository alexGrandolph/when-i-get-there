import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext()

const initialUserState = {
  userId: "",
  email: "",
  apiKey: "",
}

export const ContextProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialUserState)
  
  return (
    <StateContext.Provider
      value={{
        activeUser,
        setActiveUser,
        currentUser,
        setCurrentUser,
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