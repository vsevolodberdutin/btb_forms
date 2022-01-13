import React from 'react'
import './Input.scss'

const Input = () => {
    const buttonHandler = () => { 
        console.log('continue')
    }

    return (
        <div>
            <div className="detail-form">
                <h4>אנא השלימו את הפרתים הבאים</h4>
                <input type="text" placeholder='שם פרטי' />
                <input type="text" placeholder='שם משפחה' />
                <input type="text" placeholder='תעודת זהות' />
                <input type="text" placeholder='תאריך לידה' />
                <input type="text" placeholder='טלפון' />
                <input type="text" placeholder='דואר אלקטרוני' />
                <input type="text" placeholder='שם העסק' />
                <input type="text" placeholder='ח.פ/שותפות/עמותה' />
                <div className='btn-continue-wrap' onClick={buttonHandler}>
                    <i className="material-icons btn-continue">keyboard_arrow_left</i>
                    <h6>המשך</h6>
                </div>
                
            </div>
        </div>
    )
}

export default Input
