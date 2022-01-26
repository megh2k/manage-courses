import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let API_base = "https://manage-course.herokuapp.com/";


export default function AllCourses() {


  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  let getAllCourses = async () => {
    fetch(API_base + "/all")
      .then((res) => res.json())
      .then((data) => { setCourses(data)})
      .catch((e) => console.log("error: " + e));
  };

  let deleteCourse = async id =>{
    await fetch(API_base + id, {method: 'DELETE'})
    .then(res => (res.json()))
    .catch(err =>{console.log('Error:'+err)})

    // setCourses(courses => courses.filter(item => item._id !== data.result._id));
    getAllCourses()

  }

  return (
    <div className="container">
      {courses.map((item) => (
        <ul className="list-group" key = {item._id}>
            <li className="list-group-item">
            
              <span className="spanColor">Course: </span> {item.course}
                  <i class="fas fa-trash delete" onClick = {() => deleteCourse(item._id)}></i>

                  <Link to  = {'manage-courses/update/' + item._id}><i class="fas fa-edit edit"></i>
                  </Link>
            </li>

              <li className="list-group-item"><span className="spanColor">Professor: </span> {item.professor}</li>
              <li className="list-group-item">
                <span className="spanColor">Pre-requisites: </span>{item.pre_requisites}
              </li>
              <li className="list-group-item">
                <span className="spanColor">Description: </span> {item.description}
              </li>

        </ul>
      ))}
    </div>
  );
}
