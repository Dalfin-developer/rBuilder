import React from 'react'
import './ProfileCard.css'

function ProfileCard() {
  const unreadMessages = 3
  
  return (

    <>
      <h1>Profile Card</h1>
      <h2 className='dashboard-title'>Welcome Back</h2>
      <label htmlFor="input_search">Serach Here : </label>
      <input id='input_search' type="text" />
      <p>Count Unread Messages : {unreadMessages}</p>
      <div  id="header">Header Style Using the inline CSS</div>
      <hr />

    </>
  )
}
export default ProfileCard 
