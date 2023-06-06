import React from 'react'
import "./style.css"

const Website = () => {
  return (
    <>
      <nav className='nav-btn'>
        <div className='nav-btn-group'>
          <button className='nav-btn-group-items'>
            Dinner
          </button>
          <button className='nav-btn-group-items'>
            BreakFast
          </button>
          <button className='nav-btn-group-items'>
            Evening
          </button>
          <button className='nav-btn-group-items'>
            Lunch
          </button>
          <button className='nav-btn-group-items'>
            All
          </button>
        </div>
      </nav>
     
    </>
  )
}

export default Website
