// ✅ Step 6: Workout List (Mapping Concept)

// 📍 WorkoutList.jsx

import Workoutcard from "./Workoutcard";

function WorkoutList({ workouts }) {
  return (
    <section className="list">
      <h2>📋 Your Workouts</h2>

      {workouts.length === 0 ? (
        <p>No workouts added yet!</p>
      ) : (
        workouts.map((workout) => (
          <Workoutcard key={workout.id} workout={workout} />
        ))
      )}
    </section>
  );
}

export default WorkoutList;

