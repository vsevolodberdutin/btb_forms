import React from 'react'
import { useHistory } from 'react-router-dom'
import './Input.scss'

const Input = () => {
  let history = useHistory()

  const buttonHandler = () => {
    console.log('continue')
    history.push('/loan')
  }

  return (
    <div>
      <div className="detail-form">
        <h4>אנא השלימו את הפרתים הבאים</h4>
        <form>
            <div style={{'marginBottom':10}}>
          <input
            type="text"
            placeholder="שם פרטי"
            className="validate"
            required
          />
          <input
            type="text"
            placeholder="שם משפחה"
            className="validate"
            required
          />
          <input
            type="tel"
            minlength="9"
            maxlength="9"
            placeholder="תעודת זהות"
            className="validate"
            required
          />
          <input
            type="tel"
            placeholder="תאריך לידה"
            className="validate"
            required
          />
          <input
            type="tel"
            minlength="10"
            maxlength="10"
            placeholder="טלפון"
            className="validate"
          />
          <input
            type="email"
            placeholder="דואר אלקטרוני"
            className="validate"
            required
          />
          <input
            type="text"
            placeholder="שם העסק"
            className="validate"
            required
          />
          <input
            type="text"
            placeholder="ח.פ/שותפות/עמותה"
            className="validate"
            required
          />
          </div>
          <button className="wawes-effect wawes-light btn blue" type="submit">
            Submit
          </button>
        </form>
        <div className="btn-continue-wrap" onClick={buttonHandler}>
          <i className="material-icons btn-continue">keyboard_arrow_left</i>
          <h6>המשך</h6>
        </div>
      </div>
    </div>
  )
}

export default Input
