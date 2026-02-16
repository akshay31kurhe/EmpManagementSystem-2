import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function GetEmployee() {
  const [emps, setEmps] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee/findallemp")
      .then(res => setEmps(res.data));
  }, []);

  const del = id => {
    axios.delete(`http://localhost:8080/employee/deleteemp?empid=${id}`)
      .then(() => setEmps(emps.filter(e => e.empid !== id)));
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {emps.map(e => (
            <div key={e.empid} className="card col-md-3 m-2">
              <img src={e.img} alt="" />
              <div className="card-body">
                <h5>{e.firstname}</h5>
                <button onClick={() => del(e.empid)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
