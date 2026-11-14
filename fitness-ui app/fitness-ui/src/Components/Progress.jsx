// ✅ Step 8: Progress Component (Simple Total Calories)

// 📍 Progress.jsx


function Progress({ workouts }) {
  const totalCalories = workouts.reduce(
    (sum, workout) => sum + workout.calories,
    0
  );

  return (
    <section className="progress">
      <h2>📊 Progress</h2>
      <p>Total Calories Burned: 🔥 {totalCalories}</p>
    </section>
  );
}

export default Progress;
