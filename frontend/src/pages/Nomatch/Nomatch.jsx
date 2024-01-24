import React from 'react'
import './nomatch.css'

import { useNavigate } from 'react-router-dom';

function Nomatch() {

  const navigate = useNavigate();

  return (

    <div className="flex-container">
      <div className="text-center">
        <h1>
          <span className="fade-in" id="digit1">4</span>
          <span className="fade-in" id="digit2">0</span>
          <span className="fade-in" id="digit3">4</span>
        </h1>
        <h3 className="fadeIn">PAGE NOT FOUND</h3>
        <button onClick={() => navigate(-1)} type="button" name="button" className='no-match-btn'>Go to previous page</button>
      </div>
    </div>
  )
}

export default Nomatch