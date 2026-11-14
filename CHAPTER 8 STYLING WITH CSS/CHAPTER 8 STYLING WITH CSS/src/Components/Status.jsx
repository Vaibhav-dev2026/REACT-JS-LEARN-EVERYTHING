import React from 'react'
import './Status.css'

function Status({isActive}){
  return (
    <p className={isActive ? "active":"inactive"}>
        {isActive ? "Active" : "Inactive"}
    </p>
  )
} 

export default Status
