// B. Small Calculator

// Logic:

// Two numbers + operator select

// State = {num1, num2, operator}

// Live calculate result

// Code: Calculator.js


import React, {useState} from 'react'

function Q4(){
    const [calc,setCalc]=useState({num1:"",num2:"",operator:"+"});
    const [result,setResult]=useState(0);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setCalc({...calc,[name]:value});
    }
    const handlecalculate=()=>{
        const a =parseFloat(calc.num1);
        const b=parseFloat(calc.num2);
        let res=0;

        switch(calc.operator){
            case "+": res=a+b; break;
            case "-": res=a-b; break;
            case "*": res=a*b; break;
            case "/": res=a/b; break;
                default:  res=0;
        }
        setResult(res);


    }
  return (
    <div>
        <input type="number"  name="num1" value={calc.num1} onChange={handleChange} />
        <input type="number" name='num2' value={calc.num2} onChange={handleChange} />
        <select name="operator" id="" value={calc.operator} onChange={handleChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <button onClick={handlecalculate}>calculate</button>

        <p>Result: {result}</p>
    </div>
  )
}

export default Q4
