import React from 'react'
import { GoogleLogin } from 'react-google-login'

const CLIENT_ID = '325037006623-81rph0bfnnrag7k0ioepr3khd820omb5.apps.googleusercontent.com'

const GoogleButton = ({ setIsLoggedIn }) => {
  const responseGoogle = (response) => {
    console.log(response);
  }
  
  const loginUser = () => {
    setIsLoggedIn(true)
  }
  
  return (
    <GoogleLogin
      clientId={ CLIENT_ID }
      buttonText='Login'
      onSuccess={ loginUser }
      onFailure={ responseGoogle }
      responseType='code,token'
    />
  )
}

export default GoogleButton