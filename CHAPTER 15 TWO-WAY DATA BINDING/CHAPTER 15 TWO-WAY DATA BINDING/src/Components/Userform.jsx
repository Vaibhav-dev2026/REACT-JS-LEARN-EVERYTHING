// Example 2: Form with Multiple Fields

import React, { useState } from 'react'

function Userform(){
    const[formdata,setformdata]=useState({
        firstname:"",
        lastname:"",
        email:""
    });
    const handlechange=(e)=>{
        const{name,value}=e.target;
        setformdata({...formdata,[name]: value})
    }
    const handlesubmit=(e)=>{
      e.preventdefault();
      console.log(formdata)
    }
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input type="text" name='firstname' value={formdata.firstname} onChange={handlechange} placeholder='Enter your firstname' />
        <input type="text" name='lastname' value={formdata.lastname} onChange={handlechange} placeholder='Enter your lastname' />
        <input type="email" name='email' value={formdata.email} onChange={handlechange} placeholder='Enter your email' />
        <h3>Preview:</h3>
        <p>{formdata.firstname}{formdata.lastname}-{formdata.email}</p>
        <button type='submit'>Submit</button>


      </form>

      
    </div>
  )
}

export default Userform


// Key Points:

// formData object stores multiple inputs.

// [name]: value → dynamic property name to update correct field.

// Preview shows live two-way binding.


// 5️⃣ Practical Utilities in Today's Applications

// Two-way data binding is used in:

// Forms (login, registration, feedback forms)

// Dynamic search filters

// Live calculators

// Chat apps (typing updates state → message preview)

// Admin dashboards with editable tables



// 6️⃣ Common Confusions / Mistakes

// Not setting value for input → state won’t reflect in UI.

// Direct DOM manipulation (document.getElementById) instead of state → React will override on re-render.

// Forgetting onChange handler → input editable but state won’t update.

// Not using unique name in multiple inputs → object update will fail.

// Beginners confuse React one-way vs two-way → React never truly binds automatically like Angular; we do it manually using state + handler.




