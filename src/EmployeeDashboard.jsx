import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee/findallemp")
      .then(res => setEmployees(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {employees.map(emp => (
            <div key={emp.empid} className="card col-md-3 m-2 shadow">
              <img src={emp.img || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="emp" />
              <div className="card-body">
                <h5>{emp.firstname} {emp.lastname}</h5>
                <p>{emp.department} - {emp.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
