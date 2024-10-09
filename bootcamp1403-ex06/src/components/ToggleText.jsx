import React, { useState } from 'react'
import './ToggleText.css'

function ToggleText() {
  const [isHidden, setIsHidden] = useState(true)

  const toggleVisibility = () => {
    setIsHidden(prevState => !prevState)
  }

  return (
    <div className="toggle-text-container">
      <button onClick={toggleVisibility} className="toggle-button">
        {isHidden ? 'Show' : 'Hide'}
      </button>
      {!isHidden && <p className="toggle-text">Hello, World!</p>}
    </div>
  )
}

export default ToggleText
