import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/manage-courses" className="navbar-brand brand1">
        <h1>Changesss</h1>
      </Link>
      <Link to="/manage-courses/all" className="navbar-brand brand2">
        All Courses
      </Link>
      <Link to="/manage-courses/add" className="navbar-brand brand3">
        Add Course
      </Link>
    </nav>
  );
}
