import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/" className="navbar-brand brand1">
        <h1>Courses</h1>
      </Link>
      <Link to="/all" className="navbar-brand brand2">
        All Courses
      </Link>
      <Link to="/add" className="navbar-brand brand3">
        Add Course
      </Link>
    </nav>
  );
}
