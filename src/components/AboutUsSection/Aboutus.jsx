import React from "react";
import "./aboutus.css";
import Construction from "../../assets/engineering-left.jpg";
import Enginner from "../../assets/engineering-right.jpg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
const AboutUs = () => {
  return (
    <>
      <h2 className="title-about">About Us</h2>
      <div className="grid-wrapper">
        <div className="grid-container">
          <div className="left-side">
            <h2 className="title-left-side">
              Engineering firm that is dedicated to the preservation and
              enhancement of existing buildings.
            </h2>
            <img src={Construction} alt="Construction" className="img-left" />
          </div>
          <div className="right-side">
            <div>
              <span className="text-right-side">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </span>
              <ul className="ul-box">
                <li className="lists">Forward Focus</li>
                <li className="lists">Technology enabled</li>
                <li className="lists">
                  Effective communication & problem solving
                </li>
                <li className="lists">Professional growth</li>
              </ul>
              <button className="learn-btn">
                Learn More <Arrow style={{ color: "#007396" }} />{" "}
              </button>
            </div>
            <img src={Enginner} alt="Engineer" className="img-right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
