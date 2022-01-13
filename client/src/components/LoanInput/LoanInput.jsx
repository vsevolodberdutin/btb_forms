import React from 'react'
import './LoanInput.scss'

export const LoanInput = (props) => {
  return (
    <div className="input">
      <h5>{props.name}</h5>
      <div class="input-field">
        <input type="text" className="validate" />
      </div>
    </div>
  )
}

export const LoanSelect = (props) => {
  return (
    <div className="input">
      <h5>{props.name}</h5>
      <div className="input-field">
        <select>
          <option value="1">{props.isBank ? 'Leumi' : '20%'}</option>
          <option value="2">{props.isBank ? 'Hapoalim' : '35%'}</option>
          <option value="3">{props.isBank ? 'Mizrahi' : '50%'}</option>
        </select>
      </div>
    </div>
  )
}
