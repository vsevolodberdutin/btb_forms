import React from 'react'
import './LoanForm.scss'
import {LoanInput, LoanSelect} from '../LoanInput/LoanInput'

const LoanForm = () => {

    const buttonHandler = () => { 
        console.log('back')
        }

    return (
        <div className='wrapper'>
            <h3>אנא מלאו את פרטי החשבונות של חברת שלמה יזמות ובניו</h3>
            <h6>חפ: 51-65758854</h6>
            <LoanSelect name={"החזקה %"} isBank={false}/>
            <div className="form">
                <div className="row">
                    <LoanSelect name={"בנק"} isBank={true}/>
                    <LoanInput name={"סניף"}/>
                    <LoanInput name={"חשבון"}/>
                </div>
                <div className="row">
                    <LoanSelect name={"בנק"} isBank={true}/>
                    <LoanInput name={"סניף"}/>
                    <LoanInput name={"חשבון"}/>
                </div>
                <div className="row">
                    <LoanSelect name={"בנק"} isBank={true}/>
                    <LoanInput name={"סניף"}/>
                    <LoanInput name={"חשבון"}/>
                </div>
            </div>
                <h5 className="grey">הוסף חשבון<i className="material-icons add_circle_outline">add_circle_outline</i></h5>
                <div className='btn-continue-wrap' onClick={buttonHandler}>
                    <i className="material-icons btn-continue">keyboard_arrow_right</i>
                    <h6>החזור</h6>
                </div>
        </div>
    )
}

export default LoanForm
