import React from "react";
import "./App.css";
import Header from "./Header";
import { courses } from "./data";
import Course from "./Course";

function App() {
  return (
    <>
      <Header />
      <div className="courses">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}

export default App;
