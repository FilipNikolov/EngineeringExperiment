import React from "react";
import "./homepage.css";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="main-box">
        <div className="title-box">
          <h2 className="title">Global Engineering</h2>
          <h1 className="main-title">Engineering, Beyond Limits</h1>
          <p className="box-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.when an unknown printer took.
          </p>
          <button className="box-button">
            Expolore Services <Arrow style={{ color: "#007396" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
