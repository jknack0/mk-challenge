import React from 'react'
import { NotificationContainer } from './Styles'

const Notification = ({name}) => {
  if(!name) {
    return null
  } else {
    return (
      <NotificationContainer>Thanks {name} we've received your message!</NotificationContainer>
    )
  }
}

export default Notification