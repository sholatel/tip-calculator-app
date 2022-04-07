import React from 'react'
import TipButtonStyle from '../ComponentStyles/TipButtonsStyle.css'

function  TipButtons ({dispatchFunction, buttonValue}) {
    return (
        <input id='tip-button' onClick={(evt)=> {dispatchFunction({actionType: 'changeTip' , actionValue:`${buttonValue}`
            })}} value={`${buttonValue}%`} type='tel' readOnly/>
    )
} 

export default TipButtons;