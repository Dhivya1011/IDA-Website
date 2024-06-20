import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate=useNavigate()
  const handleSubmit=()=>{
    navigate('/login')

  }
  return (
    <div className='signup'>
      <h1>SIGN UP</h1><br/>
      <input placeholder='name'/><br/>
      <input placeholder='email'/><br/>
      <input placeholder='password'/><br/>
      <button onClick={handleSubmit}>Sign up</button>
    </div>
  )
}
