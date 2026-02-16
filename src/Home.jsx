import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" className="d-block w-100" alt="1"/>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" className="d-block w-100" alt="2"/>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" className="d-block w-100" alt="3"/>
          </div>
        </div>
      </div>
    </div>
  );
}
