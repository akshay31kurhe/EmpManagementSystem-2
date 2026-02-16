import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function DashboardCharts() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee/findallemp")
      .then(res => setEmployees(res.data));
  }, []);

  const dept = {};
  const desig = {};

  employees.forEach(emp => {
    dept[emp.department] = (dept[emp.department] || 0) + 1;
    desig[emp.designation] = (desig[emp.designation] || 0) + 1;
  });

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6"><Bar data={{ labels: Object.keys(dept), datasets: [{ label: "Dept Count", data: Object.values(dept) }] }} /></div>
        <div className="col-md-6"><Pie data={{ labels: Object.keys(desig), datasets: [{ label: "Designation Count", data: Object.values(desig) }] }} /></div>
      </div>
    </div>
  );
}
