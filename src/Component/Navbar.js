import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar1'>
            <h2><i class="fa-solid fa-gamepad"></i></h2>
            <h1>IDA</h1>
        </div>
        <div className='navbar2'>
            <nav>
                <NavLink to='home'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='service'>Service</NavLink>
                <NavLink to='login'>Login</NavLink>
                <NavLink to='signup'>Signup</NavLink>
            </nav>
        </div>
    </div>
  )
}
