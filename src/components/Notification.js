import React from 'react'

// Notification component
const Notification = ({ showNotification }) => {
  return (
      // Edits the className of the div depending on whether the prop is true or false
      // which will hide or display the message
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification
