import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div>
      <Header />
      <Banner title={"Frequently Asked Questions"} pageName={"faq"} />
      <Main />
      <Footer />
    </div>
  );
};

function Main() {
  return (
    <>
      <section className="w3l-faq-1 container" style={{ padding: "0px 140px" }}>
        <div className="w3l-faq-page py-5">
          <div className="container py-md-3">
            <div className="row faq-column-grid">
              <div className="faq-column col-lg-6">
                <h3>General Questions</h3>
                <details open="">
                  <summary>
                    Should I talk with a bank before looking at homes?
                    <span className="fa control-icon-expand fa-chevron-down"></span>
                    <span className="fa control-icon-close fa-times"></span>
                  </summary>
                  <p>
                    Yes, it is highly recommended to talk to a bank or lender
                    before house hunting. Getting pre-approved for a mortgage
                    helps you understand your budget and makes your offer more
                    competitive when making a bid on a property.
                  </p>
                </details>
                <details>
                  <summary>
                    Should I buy or continue to rent?
                    <span className="fa control-icon-expand fa-chevron-down"></span>
                    <span className="fa control-icon-close fa-times"></span>
                  </summary>
                  <p>
                    It depends on your financial situation, long-term goals, and
                    the real estate market. If you plan to stay in one place for
                    several years and can afford a mortgage, buying may be a
                    good option. Renting offers flexibility but doesn’t build
                    equity.
                  </p>
                </details>
                <details>
                  <summary>
                    Can I find a rent-to-own property?
                    <span className="fa control-icon-expand fa-chevron-down"></span>
                    <span className="fa control-icon-close fa-times"></span>
                  </summary>
                  <p>
                    Yes, rent-to-own properties exist, but they are less common.
                    These agreements allow renters to purchase the home after a
                    set period while living in it. However, it's important to
                    review the contract terms carefully.
                  </p>
                </details>
                <details>
                  <summary>
                    Do I really need a realtor when buying a home?
                    <span className="fa control-icon-expand fa-chevron-down"></span>
                    <span className="fa control-icon-close fa-times"></span>
                  </summary>
                  <p>
                    While it's not legally required, having a realtor can make
                    the process smoother. A realtor can help with property
                    searches, negotiations, legal paperwork, and ensuring you
                    get a fair deal.
                  </p>
                </details>
                <details>
                  <summary>
                    Who pays the realtor fees when buying a home?
                    <span className="fa control-icon-expand fa-chevron-down"></span>
                    <span className="fa control-icon-close fa-times"></span>
                  </summary>
                  <p>
                    Typically, the seller pays the realtor fees for both the
                    buyer’s and seller’s agents. These fees are usually included
                    in the selling price of the home.
                  </p>
                </details>
              </div>

              <div className="faq-column col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                <h3>Extended Licenses Questions</h3>
                <p>
                  Some real estate transactions require extended licensing for
                  commercial properties or specific legal contracts.
                </p>
                <ul>
                  <li>
                    <span className="fa fa-check pr-2"></span>License
                    requirements depend on property type.
                  </li>
                  <li>
                    <span className="fa fa-check pr-2"></span>Consult a legal
                    expert before signing agreements.
                  </li>
                  <li>
                    <span className="fa fa-check pr-2"></span>Ensure you have
                    the necessary permits for commercial properties.
                  </li>
                </ul>

                <h3 className="mt-5">Call for Support</h3>
                <p>
                  If you have any more questions, feel free to reach out to our
                  support team for guidance on real estate transactions.
                </p>
                <h4>
                  <Link id="link" to="tel:+919054800900">
                    <span className="fa fa-phone pr-2"></span> +91 9054800900
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
