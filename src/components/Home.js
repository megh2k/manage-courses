import React, { useState } from "react";
import home_page from "../images/road_to_knowledge.png";
import Fade from 'react-bootstrap/Fade'

export default function Home() {
  let [open, setOpen] = useState(false);

  return (
    <div>
      <div className="home_page">

        <div className="home_container">
          <p>
            Tired of visiting multiple pages frequently to compare courses you
            are trying to enroll in? Let me save you some trouble!
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => {
              setOpen(!open);
            }}
            aria-controls="example-fade-text"
            aria-expanded={open}
          >
            Get Started
          </button>
          <Fade in={open}>
            <div id="example-fade-text">
            Using the application is quite simple, navigate to 'Add Course' to
              add course details which can then be access from navigating to 'All Courses'.
            </div>
          </Fade>
        </div>
        <img className="home_image" src={home_page} alt="home page img" />
      </div>
    </div>
  );
}
