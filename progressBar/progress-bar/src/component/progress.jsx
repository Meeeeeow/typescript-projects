import React from 'react'

const Progress = () => {
  return (
    <div className='skills-bar'>
        <div className='skills'>
            <div className="info">
                Javascript
            </div>
            <div className="progress-bar js">
                <span></span>
            </div>
        </div>
        <div className='skills'>
            <div className="info">
                Python
            </div>
            <div className="progress-bar python">
                <span></span>
            </div>
        </div>
        <div className='skills'>
            <div className="info">
                C++
            </div>
            <div className="progress-bar c">
                <span></span>
            </div>
        </div>
        <div className='skills'>
            <div className="info">
                React
            </div>
            <div className="progress-bar react">
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default Progress