import React, { useState, useEffect, useCallback, useContext } from 'react'
import './LoanInput.scss'

export const LoanInput = () => {
  const [info, setInfo] = useState('')

  const [bank, setBank] = useState('Leumi')
  const [snif, setSnif] = useState('')
  const [hashbon, setHashbon] = useState('')

  localStorage.setItem('info', info)

  return (
    <>
      <div className="row">
        <div className="input">
          <h5>בנק</h5>
          <div className="input-field">
            <select onChange={(e) => setBank(e.currentTarget.value)}>
              <option disabled>choose your bank</option>
              <option>Leumi </option>
              <option>Hapoalim </option>
              <option>Mizrahi </option>
            </select>
          </div>
        </div>

        <div className="input loan-input">
          <h5>סניף</h5>
          <div className="input-field">
            <input
              type="tel"
              className="validate"
              required
              onChange={(e) => setSnif(e.currentTarget.value)}
            />
          </div>
        </div>

        <div className="input loan-input">
          <h5>חשבון</h5>
          <div className="input-field">
            <input
              type="tel"
              className="validate"
              required
              onChange={(e) => setHashbon(e.currentTarget.value)}
            />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <i className="material-icons red-text"  type="submit"  onClick={e => console.log("del")} style={{cursor:'pointer'}}>
              highlight_off
              </i> */}

          <button
            className="btn green "
            type="submit"
            onClick={(e) => {
              setInfo(`${bank + ' ' + snif + ' ' + hashbon}`)
              alert('Data saved')
            }}
            style={{ cursor: 'pointer' }}
          >
            save
          </button>
        </div>
      </div>
    </>
  )
}
