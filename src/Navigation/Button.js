import React from 'react'
import '../Navigation/Button.css'
import { Link } from 'react-router-dom'
export const Button = () => {
  return (
     <Link to="singup">
        <button className='btn'>Sign up</button>
     </Link>
  )
}
