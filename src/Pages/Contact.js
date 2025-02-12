import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Header/>
      <Contactbody/>
      <Footer/>
    </div>
  )
}

function Contactbody(){
  return(
    <><section className="w3l-contacts-9-main" id="contact">
  <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d53004.94287423889!2d151.1742759959253!3d-33.86881474784238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m5!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%2C%20New%20South%20Wales%2C%20Australia!3m2!1d-33.868819699999996!2d151.2092955!4m0!5e0!3m2!1sen!2sin!4v1576050374677!5m2!1sen!2sin" allowFullScreen />
  </div>
  <div className="contacts-9 py-5">
    <div className="container py-md-3">
      <h4>Contact Us</h4>
      <div className="top-map row">
        <div className="map-content-9 col-md-8">
          <form action="https://sendmail.w3layouts.com/submitForm" method="post">
            <div className="twice-two">
              <input type="text" name="w3lName" id="w3lName" placeholder="Name" required />
              <input type="email" name="w3lSender" id="w3lSender" placeholder="Email" required />
            </div>
            <div className="twice-two">
              <input type="text" name="w3lPhone" id="w3lPhone" placeholder="Phone" required />
              <input type="text" name="w3lSubject" id="w3lSubject" placeholder="Subject" required />
            </div>
            <textarea name="w3lMessage" id="w3lMessage" placeholder="Message" required defaultValue={""} />
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="cont-details col-md-4 pl-md-5 mt-md-0 mt-5">
          <div className="cont-top">
            <div className="cont-left">
              <span className="fa fa-home" />
            </div>
            <div className="cont-right">
              <h6>Address</h6>
              <p>Estate Business, #32841 block, #221DRS Real estate business building, Sydney.</p>
            </div>
          </div>
          <div className="cont-top mt-4 mb-4">
            <div className="cont-left">
              <span className="fa fa-phone" />
            </div>
            <div className="cont-right">
              <h6>Phone Us</h6>
              <p><Link to="/tel:+142 5897555">+142 5897555</Link></p>
            </div>
          </div>
          <div className="cont-top">
            <div className="cont-left">
              <span className="fa fa-envelope-o" />
            </div>
            <div className="cont-right">
              <h6>Email Us</h6>
              <p><Link to="/https://p.w3layouts.com/cdn-cgi/l/email-protection#204558414d504c450d4d41494c60535550504f52540e434f4d" className="mail"><span className="__cf_email__" data-cfemail="2d48554c405d414800404c44416d5e585d5d425f59034e4240">[email&nbsp;protected]</span></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}

export default Contact
