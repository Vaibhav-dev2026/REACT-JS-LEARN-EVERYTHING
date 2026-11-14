// ✅ Step 5: Workout Card (Props Concept)
// 📌 Props = Data pass from parent to child

// 📍 WorkoutCard.jsx

import React from 'react'

function Workoutcard({workout}){
  return (
    <div className='card'>
        <h3>{workout.name}</h3>
        <p>Calories burned:{workout.calories}</p>
    </div>
  )
}

export default Workoutcard
