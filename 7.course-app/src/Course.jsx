import React from "react";

function Course({ course }) {
  console.log(course);
  return (
    <div className="course">
      <img
        style={{ borderRadius: "30px" }}
        src={course.image}
        alt={course.title}
        width={250}
      />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="fiyat">{course.price} ₺</div>

      <div className="price">
        <a href={course.link} target="_blank" rel="noreferrer">
          Satın almak için
        </a>
      </div>
    </div>
  );
}

export default Course;
