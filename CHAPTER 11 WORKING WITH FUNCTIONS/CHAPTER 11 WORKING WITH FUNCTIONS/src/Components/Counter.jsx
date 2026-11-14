// 🔵 MEDIUM
// 📁 components/Counter.jsx
// 🎯 Goal

// import { useState } from "react";

// / -

// Reset

// Arrow + normal functions

// 🧠 CONCEPTS USED

// useState

// Arrow function

// Normal function

// State update

// Event handling

import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);

    function increase(){
        setCount(count+1)
    }
    function decrease(){
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }
    return(
        <div>
            <h2>Count:{count}</h2>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>0</button>
        </div>
    );

}
export default Counter;
