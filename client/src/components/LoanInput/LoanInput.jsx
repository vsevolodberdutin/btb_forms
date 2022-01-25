import React from 'react'
import './LoanInput.scss'

export const LoanInput = (props) => {
  return (
    <div className="input loan-input">
      <h5>{props.name}</h5>
      <div className="input-field">
        <input type="tel" className="validate" required/>
      </div>
    </div>
  )
}

export const LoanSelect = (props) => {
  return (
    <div className="input">
      <h5>{props.name}</h5>
      <div className="input-field">
        <select onChange={ e => console.log(e.currentTarget.value)}>
          <option disabled>{props.isBank ? 'choose your bank' : 'choose your procent'}</option>
          <option >{props.isBank ? 'Leumi' : '20%'}</option>
          <option >{props.isBank ? 'Hapoalim' : '35%'}</option>
          <option >{props.isBank ? 'Mizrahi' : '50%'}</option>
        </select>
      </div>
    </div>
  )
}
