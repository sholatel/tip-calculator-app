import React from 'react'
import images from '.././images/index'
import style from '../ComponentStyles/BillInputStyle.css'

function  BillInput ({dispatchFunction, inputValue}) { 
    const spanStyle= {backgroundImage:`url(${images.iconDollar})`}

    return (
        <div id="bill-input-container">
            <span style={spanStyle}/>
            <input  type='tel' onChange={(evt)=> {dispatchFunction({actionType: 'changeBill' , actionValue:`${evt.target.value}`
            })}} value={`${inputValue}`} />
        </div>
    )
} 

export default BillInput;