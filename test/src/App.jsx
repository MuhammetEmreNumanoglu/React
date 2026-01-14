import React from "react";
import "./App.css";
import Header from "./Header";
import { courses } from "./data";
import Course from "./Course";
import "./css/course.css"

function App() {
  return (
    <>
      <Header />
      <div className="courses">
        {courses?.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </>
  );
}

export default App;
