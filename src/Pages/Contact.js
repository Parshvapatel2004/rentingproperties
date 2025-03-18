import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactCompo />
      <Footer />
    </div>
  );
};
function ContactCompo() {
  return (
    <div>
      <section className="w3l-contacts-9-main" id="contact">
        <Map />
        <div className="contacts-9 py-5">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
function Map() {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235026.89444410583!2d72.23154477939568!3d23.012930000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d575eef3dd%3A0xa40a9723abd1c46d!2sS.g.highway%20%7C%20Commercial%20Estate%20Agent%20In%20Ahmedabad%20by%20Monarch%20Associates!5e0!3m2!1sen!2sin!4v1742290217106!5m2!1sen!2sin"
        width={100}
        height="300"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
function ContactForm() {
  return (
    <div className="container py-md-3">
      <h4>Contact Us</h4>
      <div className="top-map row">
        <div className="map-content-9 col-md-8">
          <form action="http://localhost:8000/contactUs" method="post">
            <div className="twice-two">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required=""
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="twice-two">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                required=""
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required=""
              />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required=""
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="cont-details col-md-4 pl-md-5 mt-md-0 mt-5">
          <div className="cont-top">
            <div className="cont-left">
              <span className="fa fa-home"></span>
            </div>
            <div className="cont-right">
              <h6>Address</h6>
              <p>
                Estate Business, #123, S.G. Highway, Ahmedabad, Gujarat, India.
              </p>
            </div>
          </div>
          <div className="cont-top mt-4 mb-4">
            <div className="cont-left">
              <span className="fa fa-phone"></span>
            </div>
            <div className="cont-right">
              <h6>Phone Us</h6>
              <p>
                <Link id="link" to="tel:+91 9054800900">
                  +91 9054800900
                </Link>
              </p>
            </div>
          </div>
          <div className="cont-top">
            <div className="cont-left">
              <span className="fa fa-envelope-o"></span>
            </div>
            <div className="cont-right">
              <h6>Email Us</h6>
              <p>
                <Link
                  id="link"
                  to="mailto:contact@realestate.in"
                  className="mail"
                >
                  contact@realestate.in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
