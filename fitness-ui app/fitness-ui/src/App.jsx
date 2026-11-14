import Navbar from "./Components/Navbar";
import Progress from "./Components/Progress";
import Workoutlist from "./Components/Workoutlist";
import Workoutcard from "./Components/Workoutcard";
import Hero from "./Components/Hero";
import Addworkoutform from "./Components/Addworkoutform";


import { useState } from "react";

function App() {
  // ✅ useState = Data store inside React
  const [workouts, setWorkouts] = useState([
    { id: 1, name: "Push Day", calories: 300 },
    { id: 2, name: "Leg Day", calories: 450 },
  ]);

  // ✅ Add new workout function
  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <>
      <Navbar />
      <Hero />

      <Addworkoutform addWorkout={addWorkout} />

      <Workoutlist workouts={workouts} />

      <Progress workouts={workouts} />
    </>
  );
}

export default App;
