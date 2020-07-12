import React, { useState } from 'react'
import axios from 'axios'
import {
  FormContainer,
  FormInput,
  FormHeading,
  SubmitButton
} from './Styles'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleNameChange = (event) => {
    event.preventDefault()
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    event.preventDefault()
    setEmail(event.target.value)
  }

  const handleMessageChange = (event) => {
    event.preventDefault()
    setMessage(event.target.value)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const requestBody = {
      name,
      email,
      message
    }
    const response = await axios.post('https://or2fcbzcd1.execute-api.us-east-1.amazonaws.com/default/mailForward', requestBody)
    console.log(response)

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <FormContainer fullWidth={true}>
      <FormHeading variant='h2'>Contact Us</FormHeading>
      <FormInput
        required
        type='text'
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
      />
      <br />
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
        type='text'
        id="outlined-multiline-basic"
        label="Message"
        multiline
        rows={4}
        variant="outlined"
        value={message}
        onChange={handleMessageChange}
      />
      <br />
      <SubmitButton onClick={handleFormSubmit} variant='contained' color='primary' size='medium'>Submit</SubmitButton>
    </FormContainer>
  )
}

export default ContactForm