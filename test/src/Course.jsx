import React from "react";
import "./css/course.css"
import { courses } from "./data";

function Course({ course }) {
  const { id, title, description, price, link, image } = course;
  console.log(course);
  
  return <div className="cours" >
    <div className="course">
        <img style={{borderRadius:"30px"}}
        src={image}
        alt={title}
        width={300}
        height={150} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="fiyat">Fiyat = {price}₺ </div>
    <div className="price">
        <a href={link} target="_blank" rel="noreferrer" >Satın almak için tıklayınız</a>
    </div>
  </div>;
}

export default Course;
