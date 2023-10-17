import { useState } from 'react'
import './Checkbox.scss'

function Checkbox({ label }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setIsChecked(!isChecked)
  }

  return (
    <div className="Checkbox_container">
      <label className="Checkbox_label" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className={`Checkbox ${isChecked ? 'Checkbox__checked' : ''}`}>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.01 2C20.66 2 22 3.34 22 5v14.01c0 1.65-1.34 2.99-2.99 2.99H5a3 3 0 0 1-3-2.99V5c0-1.65 1.34-3 3-3h13.76"
            className="Checkbox-Box"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 10.55 11.09 15 22.5 2.5"
            className="Checkbox-Checkmark"
          />
        </svg>
        {label}
        <input className="Checkbox_input" type="checkbox" />
      </label>
    </div>
  )
}

export default Checkbox
