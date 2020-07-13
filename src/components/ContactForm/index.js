import React, { useState } from 'react'
import axios from 'axios'
import Notification from '../Notification'
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
  const [notification, setNotification] = useState(null)

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

    if(!name || !email || !message){
      alert('Please complete all fields of the form.')
    } else {
      const requestBody = {
        name,
        email,
        message
      }
      axios
        .post('https://or2fcbzcd1.execute-api.us-east-1.amazonaws.com/default/mailForward', requestBody)
        .then(result => {
          setNotification(name)
          setName('')
          setEmail('')
          setMessage('')
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  }

  return (
    <FormContainer fullWidth={true}>
      <FormHeading variant='h2'>Contact Us</FormHeading>
      <Notification name={notification}  />
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