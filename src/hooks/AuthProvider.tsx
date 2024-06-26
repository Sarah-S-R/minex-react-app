import React, { createContext, useContext, useState } from 'react'

interface AuthProps {
    username?: string,
    setUserName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const AuthContext = createContext<AuthProps>({
  username: undefined,
  setUserName: () => {}
})

// useContext Hook
export const useAuth = () => {
  return useContext(AuthContext)
}


// Context Provider Component
const AuthProvider = ({
  children
} : {
  children: JSX.Element
}) => {
  const [username, setUserName] = useState<string | undefined>(undefined);

  console.log(username)

  return (
    <AuthContext.Provider
      value={{
        username,
        setUserName
      }}
    >
      {children}
    </AuthContext.Provider>
    
  )
}

export default AuthProvider