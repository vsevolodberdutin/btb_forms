import React, { useState, useEffect, useRef } from 'react'
import './LoanInput.scss'

export const LoanInput = (props) => {

  const [bank, setBank] = useState('')
  const [snif, setSnif] = useState('')
  const [hashbon, setHashbon] = useState('')
  
  const [isFree, setIsFree] = useState(true)

  const inp1 = useRef()
  const inp2 = useRef()
  const inp3 = useRef()

  useEffect(() => {
    setBank(props.bank)
    setSnif(props.snif)
    setHashbon(props.hashbon)
    if (props.snif != '') {
      setIsFree(false)
      inp1.current.disabled = true
      inp2.current.disabled = true
      inp3.current.disabled = true
    }
  },[props])

  const saveData = () => {
    if (bank != "" && snif != "" && hashbon != ""){
    props.updateData({bank, snif, hashbon})
    inp1.current.disabled = true
    inp2.current.disabled = true
    inp3.current.disabled = true
    setIsFree(false)
    props.createAccounts()
    }else{
      alert('enter full data!')
    }
  }

  return (
    <>
      <div className="row">
        <div className="input">
          <h5>בנק</h5>
          <div className="input-field">
            <select 
            ref={inp1}
            value={bank}
            onChange={(e) => setBank(e.currentTarget.value)}
            >
              <option>choose your bank</option>
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
              ref={inp2}
              type="tel"
              className="validate"
              required
              value={snif}
              onChange={(e) => setSnif(e.currentTarget.value)}
            />
          </div>
        </div>

        <div className="input loan-input">
          <h5>חשבון</h5>
          <div className="input-field">
            <input
              ref={inp3}
              type="tel"
              className="validate"
              required
              value={hashbon}
              onChange={(e) => setHashbon(e.currentTarget.value)}
            />
          </div>
        </div>


        <div style={{ display: 'flex', alignItems: 'center' }}>
        {!isFree
          ?
          <i
            className="material-icons red-text"
            onClick={(e) => {  }}
            style={{ cursor: 'pointer' }}
          >
            remove_circle_outline
          </i>
          :
          <i
            className="material-icons green-text "
            onClick={saveData}
            style={{ cursor: 'pointer' }}
          >
            save
          </i>
        }
        </div>


      </div>
    </>
  )
}
