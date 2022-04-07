import React from 'react'
import CustomTipButtonStyle from '../ComponentStyles/CustomTipButtonStyle.css'

function  CustomTipButton ({dispatchFunction}) {
    return (
        <input type='tel' id='custom-tip-button' onChange={(evt)=> {dispatchFunction({actionType: 'changeTip' , actionValue:`${evt.target.value}`
            })}}   placeholder='Custom'/>
    )
} 

export default CustomTipButton;