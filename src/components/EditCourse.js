import { React, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditCourse() {
  let element;
  let {id} = useParams()
  let [popup, setPopup] = useState(false);


  let [course, setcourseValue] = useState("");
  let [professor, setprofessorValue] = useState("");
  let [pre_requisites, setpre_requisitesValue] = useState("");
  let [description, setdescriptionValues] = useState("");

  let onSubmit = (e) => {
    e.preventDefault();
    element = {
      course: course,
      professor: professor,
      pre_requisites: pre_requisites,
      description: description,
    };
    console.log(element);
    axios.post("https://manage-course.herokuapp.com/update/" + id, element)
    //  .then((res) => res.json(element))     
           

  };


  
  return (
    <div>
      <div className="container">
        <h1>Edit Course</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Course"
              value={course}
              onChange={(e) => {
                setcourseValue(e.target.value);
              }}
            />

            <input
              type="text"
              className="form-control"
              placeholder="Professor"
              value={professor}
              onChange={(e) => {
                setprofessorValue(e.target.value);
              }}
            />

            <input
              type="text"
              className="form-control"
              placeholder="Pre-requisites"
              value={pre_requisites}
              onChange={(e) => {
                setpre_requisitesValue(e.target.value);
              }}
            />

            <textarea
              type="text"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setdescriptionValues(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              setPopup(true);
            }}
          >
            Edit Course
          </button>
          {popup ? (
            <div className="popup">
              <div className="content">
                <p>Course was successfully edited.</p>
                <p><Link to = '/all' className="returnTo">Click here</Link> to return to courselist.</p>                
              </div>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}
