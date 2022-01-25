import React, {useState, useCallback, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import './LoanForm.scss'
import { LoanInput, LoanSelect } from '../LoanInput/LoanInput'
import {AuthContext} from '../../context/AuthContext'
import axios from 'axios'

const LoanForm = () => {
  let history = useHistory()

  const [procents, setProcents] = useState('procent is not chosen')

  const {userId} = useContext(AuthContext)
  const [bankAccounts, setBankAccounts] = useState([])

  const createBankAccounts = useCallback(async () => {
    try {
      await axios.post('/api/bankAccounts/add', {procents, userId}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        setBankAccounts([...bankAccounts], response.bankAccounts)
        setProcents('procent is not chosen')
        
      })
    } catch (error) {
      console.log(error)
    }
  }, [procents, bankAccounts])

  const buttonHandler = () => {
    history.push('/')
  }

  return (
    <div className="wrapper">
        <form>
      <h3>אנא מלאו את פרטי החשבונות של חברת שלמה יזמות ובניו</h3>
      <h6>חפ: 51-65758854</h6>

      <div className="input">
      <h5>החזקה %</h5>
      <div className="input-field">
        <select onChange={ e => e.currentTarget.value != "DEFAULT" ? setProcents(e.currentTarget.value) : null}>
          <option value="DEFAULT" style={{'color':"grey"}}>choose your procent</option>
          <option >20%</option>
          <option >35%</option>
          <option >50%</option>
        </select>
      </div>
    </div>

      <div className="form">
        <div className="row">
          <LoanSelect name={'בנק'} isBank={true} />
          <LoanInput name={'סניף'} />
          <LoanInput name={'חשבון'} />
        </div>
        <div className="row">
          <LoanSelect name={'בנק'} isBank={true} />
          <LoanInput name={'סניף'} />
          <LoanInput name={'חשבון'} />
        </div>
        <div className="row">
          <LoanSelect name={'בנק'} isBank={true} />
          <LoanInput name={'סניף'} />
          <LoanInput name={'חשבון'} />
        </div>
      </div>
      {/* <h5 className="grey">הוסף חשבון<i className="material-icons add_circle_outline">add_circle_outline</i></h5> */}
      <button className="wawes-effect wawes-light btn blue" type="submit"  onClick={createBankAccounts}>
        Submit
      </button>
      </form>
      <div className="btn-continue-wrap" onClick={buttonHandler}>
        <i className="material-icons btn-continue">keyboard_arrow_right</i>
        <h6>החזור</h6>
      </div>
    </div>
  )
}

export default LoanForm
