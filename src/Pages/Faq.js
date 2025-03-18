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
  const faqData = [
    {
      question: "How do I find a rental property?",
      answer:
        "You can browse our website, filter properties by location and budget, and contact the property owner or agent.",
    },
    {
      question: "What documents do I need to rent a property?",
      answer:
        "Typically, you need identification, proof of income, and sometimes references or a credit check.",
    },
    {
      question: "How much is the security deposit?",
      answer:
        "The security deposit varies by property, usually ranging from one to two months' rent.",
    },
    {
      question: "Are utilities included in the rent?",
      answer:
        "Some properties include utilities, while others require tenants to pay separately. Check the listing for details.",
    },
    {
      question: "Can I have pets in a rental property?",
      answer:
        "Pet policies vary by property. Some allow pets with a deposit, while others may have restrictions.",
    },
    {
      question: "How long is the typical rental lease?",
      answer:
        "Most leases are for 6 to 12 months, but some properties offer flexible lease terms.",
    },
    {
      question: "What should I do if I have a maintenance issue?",
      answer:
        "You should contact your landlord or property manager to report any maintenance issues as soon as possible.",
    },
  ];

  return (
    <section className="w3l-faq-1 container py-5" style={{ maxWidth: "900px" }}>
      <div className="container py-md-3">
        <h3 className="text-center mb-4">Frequently Asked Questions</h3>
        <div className="row faq-column-grid">
          <div className="faq-column col-lg-12">
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
            <h4 className="mt-4">Call for Support</h4>
            <p>
              If you have any more questions, feel free to reach out to our
              support team.
            </p>
            <h5>
              <Link id="link" to="tel:+919054800900">
                <span className="fa fa-phone pr-2"></span> +91 9054800900
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

const FaqItem = ({ question, answer }) => {
  return (
    <details className="mb-3 border rounded p-3">
      <summary className="fw-bold">{question}</summary>
      <p className="mt-2">{answer}</p>
    </details>
  );
};

export default Faq;
