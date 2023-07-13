import React,{ useState } from 'react'

const User = () => {
    type AuthUser ={
        name : string
        email : string
    }
    const [user , setUser] = useState<AuthUser | null>(null);
    const [isLoggedIn , setIsLoggedIn] = useState(false);

    const handleLogin = () =>{
        setIsLoggedIn(true);
        setUser({
            name : 'Sakata',
            email : 'sakata@yahoo.net'
        })
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
                isLoggedIn ? `Welcome ${user?.name}. Your verified email is ${user?.email} ` : 'User is not logged in'
            }
        </h2>
    </div>
  )
}

export default User