import React from "react";
import "./style.css";

const Website = () => {
  return (
    <>
      <nav className="nav-btn">
        <div className="nav-btn-group">
          <button className="nav-btn-group-items">Dinner</button>
          <button className="nav-btn-group-items">BreakFast</button>
          <button className="nav-btn-group-items">Evening</button>
          <button className="nav-btn-group-items">Lunch</button>
          <button className="nav-btn-group-items">All</button>
        </div>
      </nav>
      <section className="main-card-container">
        <div className="card-container">
          <div className="card">
            <div className="card-body">
              <span className="card-number card-circle">1</span>
              <span className="card-title subtle">Breakfast</span>
              <h2 className="card-name">Maggi</h2>
              <span className="card-description subtle">
                Maggi is usally eaten as breakfast in all around the worlds
                regions.
              </span>
              <div className="card-read">Read</div>
            </div>
            <img src="./images/maggi.jpeg" alt="i" className="card-image" />
            <span className="card-tag subtle">Order Now</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Website;
