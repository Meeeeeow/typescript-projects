import React , { useState } from 'react'

const Loggedin = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const handleLogin = () =>{
        setIsLoggedIn(true);
    }
    const handleLogout = () =>{
        setIsLoggedIn(false);
    }
  return (
    <div>
        <button type="button" onClick={handleLogin}>Login</button>
        <button type="button" onClick={handleLogout}>Logout</button>
        <h2>
            {
                isLoggedIn ? 'User is logged in' :  'User is logged out'
            }
        </h2>
    </div>
  )
}

export default Loggedin