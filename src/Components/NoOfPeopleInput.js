import React, { useRef } from 'react'
import images from '.././images/index'

import NoOfPeopleInputStyle from '../ComponentStyles/NoOfPeopleStyle.css'

function  NoOfPeopleInput ({dispatchFunction, inputValue}) { 
    const spanStyle= {backgroundImage:`url(${images.iconPerson})`}
    const inputRef = useRef()
    const displayError = (detValue) => {
        if (detValue[0]=='0') {
            document.getElementById(document.getElementById('zero-error').style.display='block')
            inputRef.current.style.borderColor='rgba(255,0,0,0.4)'
        }

        else {
            document.getElementById(document.getElementById('zero-error').style.display='none')
            inputRef.current.style.borderColor=''
        }
    }
    return (
        <div id="no-of-people-input-container">
            <span style={spanStyle} />
            <input  type='tel' ref={inputRef} onChange={(evt)=> {dispatchFunction({actionType: 'changeNoOfPeople' , actionValue:`${evt.target.value}`
            })
                displayError(evt.target.value)
            }} value={inputValue}  />
        </div>
    )
} 

export default NoOfPeopleInput;