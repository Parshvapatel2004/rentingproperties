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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83937496646!2d77.06889719019768!3d28.527280343792554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1db1c5e722d1%3A0x9d8e7d6e3eb1f24d!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1619771578334!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
      />
    </div>
  );
}
function ContactForm() {
  return (
    <div className="container py-md-3">
      <h4>Contact Us</h4>
      <div className="top-map row">
        <div className="map-content-9 col-md-8">
          <form
            action="https://sendmail.w3layouts.com/submitForm"
            method="post"
          >
            <div className="twice-two">
              <input
                type="text"
                name="w3lName"
                id="w3lName"
                placeholder="Name"
                required=""
              />
              <input
                type="email"
                name="w3lSender"
                id="w3lSender"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="twice-two">
              <input
                type="text"
                name="w3lPhone"
                id="w3lPhone"
                placeholder="Phone"
                required=""
              />
              <input
                type="text"
                name="w3lSubject"
                id="w3lSubject"
                placeholder="Subject"
                required=""
              />
            </div>
            <textarea
              name="w3lMessage"
              id="w3lMessage"
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
              <p>Estate Business, #12, Connaught Place, New Delhi, India.</p>
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
                  to="mailto:codewithpasshu@gmail.com"
                  className="mail"
                >
                  codewithpasshu@gmail.com
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
