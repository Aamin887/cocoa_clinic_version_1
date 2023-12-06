import React from 'react'
import './nomatch.css'
import { Link } from 'react-router-dom'
function Nomatch() {
  return (

    <div className="flex-container">
        <div className="text-center">
            <h1>
            <span className="fade-in" id="digit1">4</span>
            <span className="fade-in" id="digit2">0</span>
            <span className="fade-in" id="digit3">4</span>
            </h1>
            <h3 class="fadeIn">PAGE NOT FOUND</h3>
            <Link to='/' type="button" name="button" className='no-match-btn'>Return To Home</Link>
        </div>
    </div>
  )
}

export default Nomatch