import React, { useState } from 'react';
import ContactForm from './components/ContactForm'
import LoginForm from './components/LoginForm'
import './app.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className='app-container'>
      {
        isLoggedIn
        ? <ContactForm />
        : <LoginForm setIsLoggedIn={setIsLoggedIn} />
      }
    </div>
  )
}

export default App;
