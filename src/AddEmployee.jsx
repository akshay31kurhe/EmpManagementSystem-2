import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function AddEmployee() {

  const [emp, setEmp] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactno: "",
    gender: "",
    dob: "",
    joiningdate: "",
    reportingauthority: "",
    designation: "",
    department: "",
    salary: "",
    exp: "",
    panno: "",
    adharcardno: "",
    img: ""
  });

  const handleChange = (e) => {
    setEmp({
      ...emp,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/employee/addemp", emp)
      .then(() => {
        alert("Employee Added Successfully");
      })
      .catch(() => {
        alert("Error adding employee");
      });
  };

  return (
    <div>

      <Navbar />

      <div className="container mt-4">

        <h3>Add Employee</h3>

        <form onSubmit={submit}>

          <input
            name="firstname"
            placeholder="First Name"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="lastname"
            placeholder="Last Name"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="contactno"
            placeholder="Contact No"
            type="number"
            className="form-control mb-2"
            onChange={handleChange}
          />

          {/* Gender */}
          <div className="mb-2">

            <label>Gender:</label><br />

            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            /> Male

            <input
              type="radio"
              name="gender"
              value="Female"
              className="ms-3"
              onChange={handleChange}
            /> Female

          </div>


          <input
            name="dob"
            type="date"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="joiningdate"
            type="date"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="reportingauthority"
            placeholder="Reporting Authority"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="designation"
            placeholder="Designation"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="department"
            placeholder="Department"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="salary"
            placeholder="Salary"
            type="number"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="exp"
            placeholder="Experience"
            type="number"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="panno"
            placeholder="PAN No"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="adharcardno"
            placeholder="Adhar Card No"
            type="number"
            className="form-control mb-2"
            onChange={handleChange}
          />

          {/* Image URL */}
          <input
            name="img"
            placeholder="Image URL"
            className="form-control mb-2"
            onChange={handleChange}
          />


          <button className="btn btn-primary">
            Add Employee
          </button>

        </form>

      </div>

    </div>
  );
}
