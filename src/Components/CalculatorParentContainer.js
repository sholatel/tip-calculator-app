import React , {useReducer, useEffect} from 'react'
import AmountNode from './AmountNode';
import BillInput from './BillInput';
import CustomTipButton from './CustomTipButton';
import TipButtons from './TipButtons';
import NoOfPeopleInput from './NoOfPeopleInput'
import styles from '../ComponentStyles/CalculatorParentContainerStyles.css'

const tipAmount = (tip, bill, noOfPeople) => { 
    return noOfPeople[0]=='0' ||  noOfPeople=='' || bill==''?  0  : ( ( (parseInt(tip)/100  *parseFloat(bill)) )/parseInt(noOfPeople) )
}

const tipTotalAmount = (bill, tipAmount , noOfPeople) => {
    return noOfPeople[0]=='0' || bill == '' || noOfPeople =='' ? 0: (parseFloat(bill) / parseInt(noOfPeople)) +tipAmount  
} 

//variable for enabling click event for reset button
let reset=false;

const initialState ={"bill":0, "tip":10 , "NoOfPeople":0 , "tipAmount":0, "tipTotalAmount":0.00}   //the initial state of the useReducer hook
//reducer function*Number(bill)
const reducer = (state,action) => {
    switch(action.actionType) {
        case 'changeBill':
            var updatedState={...state, 'bill':action.actionValue}
            updatedState.tipAmount=tipAmount(updatedState.tip, updatedState.bill,updatedState.NoOfPeople) 
            updatedState.tipTotalAmount=tipTotalAmount(updatedState.bill, updatedState.tipAmount, updatedState.NoOfPeople)
            return  updatedState;
        case 'changeTip':
            var updatedState={...state, 'tip':action.actionValue}
            updatedState.tipAmount=tipAmount(updatedState.tip, updatedState.bill,updatedState.NoOfPeople) 
            updatedState.tipTotalAmount=tipTotalAmount(updatedState.bill, updatedState.tipAmount, updatedState.NoOfPeople)
            return  updatedState;
        case 'changeNoOfPeople':
            var updatedState={...state, 'NoOfPeople':action.actionValue}
            updatedState.tipAmount=tipAmount(updatedState.tip, updatedState.bill,updatedState.NoOfPeople) 
            updatedState.tipTotalAmount=tipTotalAmount(updatedState.bill, updatedState.tipAmount, updatedState.NoOfPeople)
            return  updatedState;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

//function for changing the background of reset button element
const  changeResetBtnBackground = (reset) => {
   reset ? document.getElementById('reset-btn').style.backgroundColor='hsl(172, 67%, 45%)' : document.getElementById('reset-btn').style.backgroundColor=''
 }

function CalculatorParentContainer () {
    let [state , dispatch] =useReducer(reducer,initialState);
    useEffect(()=> {
        reset =state.tipTotalAmount==0? false : true
        changeResetBtnBackground(reset)       
    }, [state])

    //function to enable reset btn
    function enableResetBtn (evt) {
        if (reset)  {
            dispatch ({actionType:'reset', actioValue:null})
        }       
        changeResetBtnBackground(reset)         
    }

    return (
        <section id='calculator-parent-container'>
            <div id='upper-child'>
                <div id='bill-section'>
                    <label>Bill</label>
                    <BillInput dispatchFunction={dispatch} inputValue={state.bill}/>
                </div>
                <div id='select-tip-section'>
                    <label>Select Tip %</label>
                    <div id='tip-choices'>
                        <TipButtons  dispatchFunction={dispatch} buttonValue='5'/>
                        <TipButtons  dispatchFunction={dispatch} buttonValue='10'/>
                        <TipButtons  dispatchFunction={dispatch} buttonValue='15'/>
                        <TipButtons  dispatchFunction={dispatch} buttonValue='25'/>
                        <TipButtons  dispatchFunction={dispatch} buttonValue='50'/>
                        <CustomTipButton dispatchFunction={dispatch}/>
                    </div>
                </div>
                <div id='no-of-people-section'>
                    <div>
                    <label>No of people</label> 
                    <label id='zero-error'>Can't be zero</label> 
                    </div>
                    <NoOfPeopleInput dispatchFunction={dispatch} inputValue={state.NoOfPeople}/>
                </div>
            </div>


            <div id='lower-child'>
               <div >
               <AmountNode amountType='Tip Amount' amountValue={state.tipAmount}/>
                <AmountNode amountType='Total' amountValue={state.tipTotalAmount}/>
               </div>
               <a id='reset-btn' href='javascript:void(0)' onClick={(evt)=> {
                  enableResetBtn(evt)
               }}>RESET</a>
            </div>  
        </section>
    )

}

export default CalculatorParentContainer;