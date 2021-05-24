import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-container'>
      There was an error finding the page
      <p>Go back home?</p>
      <Link to='/'>
        <button>Go Home</button>
      </Link>
    </div>
  )
}

export default Error
