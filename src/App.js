import React from "react";
import GoalList from "./components/GoalList";

import "./App.css";

const App = () => {
  const COURSE_GOALS = [
    {
      id: "cg1",
      text: "Finish the Course",
    },
    {
      id: "cg2",
      text: "Learn all about react",
    },
    {
      id: "cg2",
      text: "Help other students",
    },
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={COURSE_GOALS} />
    </div>
  );
};

export default App;
