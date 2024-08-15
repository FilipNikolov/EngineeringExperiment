import React from "react";
import "./cards.css";
import { ReactComponent as Bridge } from "../../assets/icons/bridge 1.svg";
import { ReactComponent as Drone } from "../../assets/icons/drone 1.svg";
import { ReactComponent as Roof } from "../../assets/icons/roof.svg";
import { ReactComponent as Support } from "../../assets/icons/after-sale 1.svg";
import { ReactComponent as Rail } from "../../assets/icons/repair-service 1.svg";
import { ReactComponent as Inspection } from "../../assets/icons/inspection (1) 1.svg";
import { ReactComponent as Construction } from "../../assets/icons/construction 1.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
const Cards = () => {
  return (
    <div className="cards-wrapper">
      <div className="cards-rows">
        <div className="first-row">
          <div className="single-card first">
            <h2 className="title-services">Services</h2>
            <h1 className="title-of-card">
              Our Service <br />
              Catalog
            </h1>
            <p className="generic-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.when an unknown printer took.
            </p>
            <button className="services-button">
              Explore Services <Arrow />
            </button>
          </div>
          <div className="single-card">
            <div className="first-row-box">
              <Bridge alt="/" className="icon" />
              <h2 className="cards-titles">
                Structural <br />
                Engineering
              </h2>
            </div>
            <div className="second-row-box">
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.when an unknown printer took.
              </p>
            </div>
            <div className="third-row-box">
              <button className="card-service-btn">
                View Service <Arrow style={{ color: "#00739" }} />
              </button>
            </div>
          </div>
          <div className="single-card">
            <div className="first-row-box">
              <Roof alt="/" className="icon" />
              <h2 className="cards-titles">
                Building Envelope <br />& Roof Consulting
              </h2>
            </div>
            <div className="second-row-box">
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.when an unknown printer took.
              </p>
            </div>
            <div className="third-row-box">
              <button className="card-service-btn">
                View Service <Arrow style={{ color: "#00739" }} />
              </button>
            </div>
          </div>
          <div className="single-card">
            <div className="first-row-box">
              <Rail alt="/" className="icon" />
              <h2 className="cards-titles">
                Railing Rehabilitation <br /> Design
              </h2>
            </div>
            <div className="second-row-box">
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.when an unknown printer took.
              </p>
            </div>
            <div className="third-row-box">
              <button className="card-service-btn">
                View Service <Arrow style={{ color: "#00739" }} />
              </button>
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="single-card">
            <div className="first-row-box">
              <Construction alt="/" className="icon" />
              <h2 className="cards-titles">
                Construction <br />
                Service
              </h2>
            </div>
            <div className="second-row-box">
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.when an unknown printer took.
              </p>
            </div>
            <div className="third-row-box">
              <button className="card-service-btn">
                View Service <Arrow style={{ color: "#00739" }} />
              </button>
            </div>
          </div>
          <div className="single-card">
            <div className="first-row-box">
              <Support alt="/" className="icon" />
              <h2 className="cards-titles">
                Claim <br />
                Support
              </h2>
            </div>
            <div className="second-row-box">
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.when an unknown printer took.
              </p>
            </div>
            <div className="third-row-box">
              <button className="card-service-btn">
                View Service <Arrow style={{ color: "#00739" }} />
              </button>
            </div>
          </div>
          <div className="single-card">
            <div className="first-row-box">
              <Drone alt="/" className="icon" />
              <h2 className="cards-titles">
                Aerial Drone <br />
                Services
              </h2>
            </div>
            <div className="second-row-box">
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.when an unknown printer took.
              </p>
            </div>
            <div className="third-row-box">
              <button className="card-service-btn">
                View Service <Arrow style={{ color: "#00739" }} />
              </button>
            </div>
          </div>
          <div className="single-card">
            <div className="first-row-box">
              <Inspection alt="/" className="icon" />
              <h2 className="cards-titles">
                Inspection & <br />
                Assessments
              </h2>
            </div>
            <div className="second-row-box">
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.when an unknown printer took.
              </p>
            </div>
            <div className="third-row-box">
              <button className="card-service-btn">
                View Service <Arrow style={{ color: "#00739" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
