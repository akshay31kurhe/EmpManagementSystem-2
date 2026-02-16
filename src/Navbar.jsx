import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">EMS</span>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link to="/" className="nav-link">Dashboard</Link></li>
            <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/addemp" className="nav-link">Add Employee</Link></li>
            <li className="nav-item"><Link to="/getemployee" className="nav-link">View Employee</Link></li>
            <li className="nav-item"><Link to="/employeedashboard" className="nav-link">Employee Dashboard</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link to="/aboutus" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/contactus" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
