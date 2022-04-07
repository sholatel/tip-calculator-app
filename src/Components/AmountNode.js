import React from 'react'
import AmountNodeStyle from '../ComponentStyles/AmountNodeStyle.css'

function  AmountNode ({amountValue ,amountType}) { 

    return (
        <div id='amount-node-container'>
           <div id='amount-details'>
               <h3>{amountType}</h3>
               <p>/ person</p>
           </div>
           <h1 id='amount'>${amountValue.toFixed(2)}</h1>
        </div>
    )
} 

export default AmountNode;