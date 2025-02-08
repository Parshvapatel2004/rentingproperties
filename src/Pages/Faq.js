import React from 'react'
import Header from '../Common/Header'
import Banner from '../Common/Banner'
import Footer from '../Common/Footer'

const Faq = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Faqmain/>
      <Footer/>


    </div>
  )
}
function Faqmain(){
    return (
      <>
        <section className="w3l-faq-1">
  <div className="w3l-faq-page py-5">
    <div className="container py-md-3">
      <div className="row faq-column-grid">
        <div className="faq-column col-lg-6">
          <h3>General Questions</h3>
          <details open>
            <summary>
              Should i talk with a bank before looking at homes?
              <span className="fa control-icon-expand fa-chevron-down" />
              <span className="fa control-icon-close fa-times" />
            </summary>
            <p>
              Curabitur dapibus non massa sed maximus. Nam venenatis
              justo vitae sodales mattis. Vestibulum at ullamcorper
              neque, vel lobortis tellus. consectetur vitae fringilla
              eu, ornare eu augue. Aliquam in tincidunt dui, nec mattis
              velit. Mauris at mauris erat.{'{'}" "{'}'}
            </p>
          </details>
          <details>
            <summary>
              Should i buy or continue to rent?
              <span className="fa control-icon-expand fa-chevron-down" />
              <span className="fa control-icon-close fa-times" />
            </summary>
            <p>
              Curabitur dapibus non massa sed maximus. Nam venenatis
              justo vitae sodales mattis. Vestibulum at ullamcorper
              neque, vel lobortis tellus. consectetur vitae fringilla
              eu, ornare eu augue. Aliquam in tincidunt dui, nec mattis
              velit. Mauris at mauris erat.{'{'}" "{'}'}
            </p>
          </details>
          <details>
            <summary>
              Can i find a rent-to-own property?
              <span className="fa control-icon-expand fa-chevron-down" />
              <span className="fa control-icon-close fa-times" />
            </summary>
            <p>
              Curabitur dapibus non massa sed maximus. Nam venenatis
              justo vitae sodales mattis. Vestibulum at ullamcorper
              neque, vel lobortis tellus. consectetur vitae fringilla
              eu, ornare eu augue. Aliquam in tincidunt dui, nec mattis
              velit. Mauris at mauris erat.{'{'}" "{'}'}
            </p>
          </details>
          <details>
            <summary>
              Do i really need realtor when buying a home?
              <span className="fa control-icon-expand fa-chevron-down" />
              <span className="fa control-icon-close fa-times" />
            </summary>
            <p>
              Curabitur dapibus non massa sed maximus. Nam venenatis
              justo vitae sodales mattis. Vestibulum at ullamcorper
              neque, vel lobortis tellus. consectetur vitae fringilla
              eu, ornare eu augue. Aliquam in tincidunt dui, nec mattis
              velit. Mauris at mauris erat.{'{'}" "{'}'}
            </p>
          </details>
          <details>
            <summary>
              Can i find a rent-to-own property?
              <span className="fa control-icon-expand fa-chevron-down" />
              <span className="fa control-icon-close fa-times" />
            </summary>
            <p>
              Curabitur dapibus non massa sed maximus. Nam venenatis
              justo vitae sodales mattis. Vestibulum at ullamcorper
              neque, vel lobortis tellus. consectetur vitae fringilla
              eu, ornare eu augue. Aliquam in tincidunt dui, nec mattis
              velit. Mauris at mauris erat.{'{'}" "{'}'}
            </p>
          </details>
          <details>
            <summary>
              Do i really need realtor when buying a home?
              <span className="fa control-icon-expand fa-chevron-down" />
              <span className="fa control-icon-close fa-times" />
            </summary>
            <p>
              Curabitur dapibus non massa sed maximus. Nam venenatis
              justo vitae sodales mattis. Vestibulum at ullamcorper
              neque, vel lobortis tellus. consectetur vitae fringilla
              eu, ornare eu augue. Aliquam in tincidunt dui, nec mattis
              velit. Mauris at mauris erat.{'{'}" "{'}'}
            </p>
          </details>
          <details>
            <summary>
              Who pays the realtor fees when buying a home?
              <span className="fa control-icon-expand fa-chevron-down" />
              <span className="fa control-icon-close fa-times" />
            </summary>
            <p>
              Curabitur dapibus non massa sed maximus. Nam venenatis
              justo vitae sodales mattis. Vestibulum at ullamcorper
              neque, vel lobortis tellus. consectetur vitae fringilla
              eu, ornare eu augue. Aliquam in tincidunt dui, nec mattis
              velit. Mauris at mauris erat.{'{'}" "{'}'}
            </p>
          </details>
        </div>
        <div className="faq-column col-lg-6 pl-lg-5 mt-lg-0 mt-5">
          <h3>Extended Licenses Questions</h3>
          <p>
            Curabitur dapibus non massa sed maximus. Nam venenatis justo
            vitae sodales mattis. Vestibulum at ullamcorper neque, vel
            lobortis tellus. consectetur vitae fringilla eu, ornare eu
            augue. Aliquam in tincidunt dui, nec mattis velit. Mauris at
            mauris erat.{'{'}" "{'}'}
          </p>
          <ul>
            <li>
              <span className="fa fa-check pr-2" />Nam venenatis justo
            </li>
            <li>
              <span className="fa fa-check pr-2" />Aliquam in tincidunt
              dui
            </li>
            <li>
              <span className="fa fa-check pr-2" />Consectetur vitae
              fringilla{'{'}" "{'}'}
            </li>
          </ul>
          <h3 className="mt-5">Call for Support</h3>
          <p>
            Curabitur dapibus non massa sed maximus. Nam venenatis justo
            vitae sodales mattis. Vestibulum at ullamcorper neque, vel
            lobortis tellus. consectetur vitae fringilla eu, ornare eu
            augue. Aliquam in tincidunt dui, nec mattis velit. Mauris at
            mauris erat.{'{'}" "{'}'}
          </p>
          <h4>
            <a href="tel:+142 5897555">
              <span className="fa fa-phone pr-2" /> +142 5897555
            </a>
          </h4>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    );
}

export default Faq
