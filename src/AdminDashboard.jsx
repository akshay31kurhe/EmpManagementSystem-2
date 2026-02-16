import React from "react";
import Navbar from "./Navbar";
import DashboardCharts from "./DashboardCharts";

export default function AdminDashboard() {
  return (
    <div>
      <Navbar />
      <h2 className="text-center text-warning mt-3">Welcome Admin</h2>

      <div style={{
        height: "250px",
        backgroundImage: "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",
        backgroundSize: "cover"
      }}></div>

      <DashboardCharts />
    </div>
  );
}
