import React, { useState } from 'react'
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../../aws-exports'
import GoogleButton from '../GoogleButton'
import {
  FormContainer,
  FormInput,
  FormHeading,
  SubmitButton
} from './Styles'

Amplify.configure(awsconfig)

const LoginForm = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event) => {
    event.preventDefault()
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    event.preventDefault()
    setPassword(event.target.value)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    Auth
      .signIn(email, password)
      .then(result => {
        setIsLoggedIn(true)
      })
      .catch(error => {
        alert(error.message)
      })
    
    setEmail('')
    setPassword('')
  }

  return (
    <FormContainer fullWidth={true}>
      <FormHeading variant='h2'>Login</FormHeading>
      <FormInput
        required
        type='email'
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
      />
      <br />
      <FormInput
        required
        type='password'
        id="outlined-basic" 
        label="Password" 
        variant="outlined"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <SubmitButton onClick={handleFormSubmit} variant='contained' color='primary' size='medium'>Login</SubmitButton>
      <GoogleButton setIsLoggedIn={setIsLoggedIn} />
    </FormContainer>
  )
}

export default LoginForm