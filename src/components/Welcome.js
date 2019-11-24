import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to Giggy</h1>
      <p>Get connected with music opportunities, directly and transparently.</p>
      <Link to='/login'><button>Enter</button></Link>
    </div> 
  )
}

export default Welcome