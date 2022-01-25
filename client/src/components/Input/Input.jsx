import axios from 'axios'
import React, {useState, useCallback, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import './Input.scss'
import {AuthContext} from '../../context/AuthContext'

const Input = () => {
  let history = useHistory()

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [teudatZeut, setTeudatZeut] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [nameOfCompany, setNameOfCompany] = useState('')
  const [partnership, setPartnership] = useState('')

  const {userId} = useContext(AuthContext)
  const [data, setData] = useState([])

  const createData = useCallback(async () => {
    if(!name || !surname || !teudatZeut || !dateOfBirth || !email || !nameOfCompany || !partnership) return null
    try {
      await axios.post('/api/data/add', {name, surname, teudatZeut, dateOfBirth, phone, email, nameOfCompany, partnership, userId}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        setData([...data], response.data)
        setName('')
        setSurname('')
        setTeudatZeut('')
        setDateOfBirth('')
        setPhone('')
        setEmail('')
        setNameOfCompany('')
        setPartnership('')
      })
    } catch (error) {
      console.log(error)
    }
  }, [name, surname, teudatZeut, userId, dateOfBirth, phone, email, nameOfCompany, partnership, data])

  const buttonHandler = () => {
    console.log('continue')
    history.push('/loan')
  }

  return (
    <div>
      <div className="detail-form">
        <h4>אנא השלימו את הפרתים הבאים</h4>
        <form onSubmit={e => e.preventDefault()}>
            <div style={{'marginBottom':10}}>
          <input
            type="text"
            placeholder="שם פרטי"
            className="validate"
            required
            value={name}
            onChange={e=>setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="שם משפחה"
            className="validate"
            required
            value={surname}
            onChange={e=>setSurname(e.target.value)}
          />
          <input
            type="tel"
            minlength="9"
            maxlength="9"
            placeholder="תעודת זהות"
            className="validate"
            required
            value={teudatZeut}
            onChange={e=>setTeudatZeut(e.target.value)}
          />
          <input
            type="tel"
            placeholder="תאריך לידה"
            className="validate"
            required
            value={dateOfBirth}
            onChange={e=>setDateOfBirth(e.target.value)}
          />
          <input
            type="tel"
            minlength="10"
            maxlength="10"
            placeholder="טלפון"
            className="validate"
            value={phone}
            onChange={e=>setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="דואר אלקטרוני"
            className="validate"
            required
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="שם העסק"
            className="validate"
            required
            value={nameOfCompany}
            onChange={e=>setNameOfCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="ח.פ/שותפות/עמותה"
            className="validate"
            required
            value={partnership}
            onChange={e=>setPartnership(e.target.value)}
          />
          </div>
          <button className="wawes-effect wawes-light btn blue" type="submit" onClick={createData}>
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
