import React from "react";
import "./contactus.css";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <div className="conctactus-left-side">
        <h2 className="title-contactus">Contact Us</h2>
        <h1 className="conctactus-h1">Get in Touch With Us</h1>
        <p className="conctactus-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.when an unknown printer took. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s.when an
          unknown printer took.
        </p>
        <div className="call-email">
          <div className="phone-section">
            <div className="phone-r-1">
              <Phone />
              <h2 className="icon-text">Call us</h2>
            </div>
            <span className="number-mail">(000) 123-4567</span>
          </div>
          <div className="phone-section">
            <div className="phone-r-1">
              <Email />
              <h2 className="icon-text">E-mail us</h2>
            </div>
            <span className="number-mail">hello@email.com</span>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.13111611005!2d-74.29149585450978!3d40.69732899508137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2smk!4v1723723922321!5m2!1sen!2smk"
          allowfullscreen=""
          loading="lazy"
          className="map-place"
          allowFullScreen="true"
        ></iframe>
      </div>
      <div className="contactus-right-side">
        <div className="right-side-titles">
          <h2 className="title-dynamic">Dynamic Engineering</h2>
          <h1 className="form-title">Interested In Working With Us?</h1>
        </div>
        <div class="form-container">
          <form class="form">
            <div class="form-row">
              <div class="form-group">
                <label className="label-above">First Name</label>
                <input placeholder="Type here" type="text" />
              </div>
              <div class="form-group">
                <label className="label-above">Last Name</label>
                <input placeholder="Type here" type="text" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label className="label-above">Email</label>
                <input placeholder="Type here" type="text" />
              </div>
              <div class="form-group">
                <label className="label-above">Comapny Name</label>
                <input placeholder="Type here" type="text" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label className="label-above">City</label>
                <input placeholder="Type here" type="text" />
              </div>
              <div class="form-group">
                <label className="label-above">State</label>
                <input placeholder="Type here" type="text" />
              </div>
              <div class="form-group">
                <label className="label-above">Zip Code</label>
                <input placeholder="Type here" type="text" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label className="label-above">Message</label>
                <textarea placeholder="Type here"></textarea>
              </div>
            </div>

            <button type="submit" className="send-msg-btn">
              Send Message <Arrow />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
