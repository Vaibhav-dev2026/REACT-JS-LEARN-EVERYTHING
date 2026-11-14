import React, { useReducer } from 'react'
const initialState={count:0};

function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
            return{count:state.count+1};
        case "DECREMENT":
            return{count:state.count-1};
        case "RESET":
            return{count:0};
        default:
            return state;
    }

}
function CounterReducer(){
    const [state,dispatch]=useReducer(reducer,initialState);

    return(
        <div>
            <h2>{state.count}</h2>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
            <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>

        </div>
    );
}

export default CounterReducer


// 🧠 Concepts Used

// Reducer = pure function

// Action = kya karna hai

// State = data

// 🌍 Real World Use

// Forms

// Cart logic

// Authentication
