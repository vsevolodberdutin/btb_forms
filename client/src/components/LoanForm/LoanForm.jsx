import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './LoanForm.scss'
import { LoanInput } from '../LoanInput/LoanInput'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const LoanForm = () => {
  let history = useHistory()
  const initialAccount = { bank: '', hashbon: '', snif: '' }

  const [accounts, setAccounts] = useState([initialAccount])
  const { userId } = useContext(AuthContext)
  const [procent, setProcent] = useState('20%')

  const getAccounts = useCallback(async () => {
    try {
      await axios
        .get('/api/bankAccounts', {
          headers: {
            'Content-Type': 'application/json',
          },
          params: { userId },
        })
        .then((response) => {
          // console.log('res', response)
          if (response.data.length != 0) setAccounts(response.data[0].accounts)
        })
    } catch (error) {
      console.log(error)
    }
  }, [userId])

  useEffect(() => {
    getAccounts()
  },[])

  const createAccounts = useCallback(async () => {
    try {
      if (accounts[0].snif != "")
      await axios.post('/api/bankAccounts/add', {procent, accounts, userId}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        setAccounts([...accounts], response.accounts)
        getAccounts()
      })
    } catch (error) {
      console.log(error)
    }
  }, [procent, accounts, userId])


  const buttonHandler = () => {
    history.push('/')
  }

  const addAccount = () => {
    if (accounts[accounts.length-1].hashbon != '') {
    setAccounts([...accounts, initialAccount])
    
  }
  }

  const updateData = (value) => {
    
    const arr = accounts.slice(0, -1)
    setAccounts([...arr, { bank: value.bank, hashbon: value.hashbon, snif: value.snif}])
    // console.log("value", accounts)
 }

  return (
    <div className="wrapper">
      <form onSubmit={(e) => e.preventDefault()}>
        <h3>אנא מלאו את פרטי החשבונות של חברת שלמה יזמות ובניו</h3>
        <h6>חפ: 51-65758854</h6>

        <div className="input">
          <h5>החזקה %</h5>
          <div className="input-field">
            <select
              value={procent}
              onChange={(e) =>
                e.currentTarget.value !== 'DEFAULT'
                  ? setProcent(e.currentTarget.value)
                  : null
              }
            >
              <option value="DEFAULT" style={{ color: 'grey' }}>
                choose your procent
              </option>
              <option>20%</option>
              <option>35%</option>
              <option>50%</option>
            </select>
          </div>
        </div>

        <div className="form">
          {accounts.map((account, index) => {
            return (
              <LoanInput
                bank={account.bank}
                snif={account.snif}
                hashbon={account.hashbon}
                updateData={updateData}
                createAccounts={createAccounts}
                key={index}
              />
            )
          })}
        </div>

        <h5 className="grey" onClick = {addAccount} style={{cursor: 'pointer'}}>
          הוסף חשבון
          <i className="material-icons add_circle_outline">
            add_circle_outline
          </i>
        </h5>
     
      </form>
      <div className="btn-continue-wrap" onClick={buttonHandler}>
        <i className="material-icons btn-continue">keyboard_arrow_right</i>
        <h6>החזור</h6>
      </div>
    </div>
  )
}

export default LoanForm
