import React, {useState} from 'react'
function Q2(){
const [name,setname]=useState({firstname:"",lastname:""});

const handlechange= (e) =>{
    const {name,value}=e.target;
    setname({...name,[name]:value});
}

  return (
    <div>
        <input type="text" name='firstname' value={name.firstname} onChange={handlechange} placeholder='Enter your first name' />
        <input type="text" name='lastname' value={name.lastname} onChange={handlechange} placeholder='Enter your last name'/>
        <p>full name:{name.firstname} {name.lastname}</p>
      
    </div>
  )
}

export default Q2
