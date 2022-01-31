import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './LoanForm.scss'
import { LoanInput } from '../LoanInput/LoanInput'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const LoanForm = () => {
  let history = useHistory()
  
  const { userId } = useContext(AuthContext)
  const initialAccount = { bank: '', hashbon: '', snif: '' }
  
  const [procent, setProcent] = useState('20%')
  const [account, setAccount] = useState()
  const [accountsAll, setAccountsAll] = useState([])
  

///////////// async functions:

  const getAccount = useCallback(async () => {
    try {
      await axios
        .get('/api/bankAccount', {
          headers: {
            'Content-Type': 'application/json',
          },
          params: { userId },
        })
        .then((response) => {
          response.data.length == 0 
          ?
          setAccountsAll([...accountsAll, initialAccount])
          :
          setAccountsAll(response.data)
          // console.log("response.data", accountsAll)
        })
    } catch (error) {
      console.log(error)
    }
  }, [userId])
  
  useEffect(() => {
    getAccount()
  },[])
  



const createAccount = useCallback(async () => {
    try {
        await axios.post('/api/bankAccount/add', {account, procent, userId}, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            getAccount()
            
        })
    } catch (error) {
        console.log(error)
    }
}, [userId, getAccount, account, accountsAll])

// const removeAccount = useCallback(async (id) => {
//   try {   
//       await axios.delete(`/api/bankAccount/delete/${id}`, {id}, {
//           headers: {'Content-Type': 'application/json'}
//       })
//       .then(() => getAccount())
      
//   } catch (error) {
//       console.log(error)
//   }
// }, [getAccount])



/////////////// button handlers:

  const buttonHandler = useCallback(() => {
    history.push('/')
    console.log("history", accountsAll)
  })

  const updateData = useCallback((value) => {
    const arr = accountsAll.slice(0, -1)
    setAccountsAll([...arr, { bank: value.bank, hashbon: value.hashbon, snif: value.snif}])
    setAccount({ bank: value.bank, hashbon: value.hashbon, snif: value.snif})
    createAccount()
    console.log("updateData", accountsAll)
    
  })
  
  const addAccount = useCallback(() => {
    if (accountsAll[accountsAll.length - 1].snif != "" || undefined) {
      setAccountsAll([...accountsAll, initialAccount])
  }
  })

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

          {
          accountsAll.length > 0 
          ?
          accountsAll.map((account, index) => {
            return (
              // console.log("s", account.snif)
              <LoanInput
                bank={account.bank}
                snif={account.snif}
                hashbon={account.hashbon}
                updateData={updateData}
                addAccount={addAccount}
                key={index}
              />
             ) 
          })
          :
          null
        }
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
