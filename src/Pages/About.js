import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Header />
      <Banner heading={"About Us"} pagename={"About"}  />
      <Aboutindex />
      <AboutGrid />
      <AboutTeam />
      <Footer />
    </div>
  );
};

const Aboutindex = () => {
  return (
    <div>
      <section className="w3l-index1" id="about">
        <div className="calltoaction-20  py-5 editContent">
          <div className="container py-md-3">
            <div className="calltoaction-20-content row">
              <div className="column ccont-left col-lg-6">
                <img
                  src="assets/images/g15.jpg"
                  className="img-responsive"
                  alt
                />
              </div>
              <div className="column center-align-self col-lg-6 mt-lg-0 mt-4 pl-lg-5 pl-3">
                <h5 className="editContent">About Real Estate</h5>
                <h3 className="editContent">
                  We create functional, beautiful exteriors for our clients
                  since 2010.
                </h3>
                <p className="more-gap editContent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam architecto, ex veritatis tempora aliquid labore natus
                  autem iusto magni dicta incidunt nostrum odit veniam voluptas
                  provident minus saepe reiciendis nulla dolore delectus
                  molestias nam officiis repellat. Sequi corrupti reiciendis
                  nostrum.
                </p>
                <Link id="link" to="/services" className="theme-button btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function AboutGrid() {
  return (
    <>
      <section className="grids-1">
        <div className="grids py-5">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head">Core Features</h3>
              <p className="my-3 head">
                {"{"}" "{"}"}
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.
              </p>
            </div>
            <div className="grids-content row mt-5 pt-3">
              <div className="col-lg-4 col-md-6">
                <div className="column gri-1 text-left">
                  <div className="icon-top mb-4">
                    <span className="fa fa-building-o" />
                  </div>
                  <h4>
                    <Link id="link" to="/services">Search Property From Anywhere</Link>
                  </h4>
                  <p>
                    Consectetur adipisicingelit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                  <Link id="link" to="/services" className="red">
                    Read More <span className="fa fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div className="column gri-3 text-left">
                  <div className="icon-top mb-4">
                    <span className="fa fa-university" />
                  </div>
                  <h4>
                    <Link id="link" to="/services">
                      Professional &amp; Per Friendly Agents
                    </Link>
                  </h4>
                  <p>
                    Consectetur adipisicingelit, sed do eiusmod tempor
                    incididunt ut labore et dolore .
                  </p>
                  <Link id="link" to="/services" className="red">
                    Read More <span className="fa fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-0 offset-md-3 col-md-6 mt-lg-0 mt-4">
                <div className="column gri-2 text-left">
                  <div className="icon-top mb-4">
                    <span className="fa fa-hospital-o" />
                  </div>
                  <h4>
                    <Link id="link" to="/services">Buy and Sell Awesome Property</Link>
                  </h4>
                  <p>
                    Consectetur adipisicingelit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                  <Link id="link" to="/services" className="red">
                    Read More <span className="fa fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutTeam(){
    return(
        <>
        <section className="w3l-team-61" id="team">
  <div className="team-61_sur py-5">
    <div className="container py-md-3">
      <div className="team-61_sur-wrap">
        <div className="grid grid-column-2">
          <div className="heading text-center mx-auto">
            <h3 className="head">Our Agents</h3>
            <p className="my-3 head"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.</p>
          </div>
          <div className="team-right-content row mt-5 pt-3">
            <div className="teams-gd col-lg-3 col-sm-6">
              <div className="team-member">
                <div className="team-img">
                  <Link id="link" to="/agent-single"><img className="img-fluid" src="assets/images/t4.jpg" alt /></Link>
                </div>
                <div className="team-hover">
                  <div className="desk">
                    <h4><Link id="link" to="/agent-single">Meet Me</Link></h4>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur </p>
                  </div>
                  <div className="s-link">
                    <Link id="link" to="/#"><span className="fa fa-facebook" /></Link>
                    <Link id="link" to="/#"><span className="fa fa-twitter" /></Link>
                    <Link id="link" to="/#"><span className="fa fa-google-plus" /></Link>
                  </div>
                </div>
              </div>
              <div className="team-title">
                <h5><Link id="link" to="/agent-single">Martin Smith</Link></h5>
                <span>founder &amp; ceo</span>
              </div>
            </div>
            <div className="teams-gd col-lg-3 col-sm-6 mt-sm-0 mt-4">
              <div className="team-member">
                <div className="team-img">
                  <Link id="link" to="/agent-single"><img className="img-fluid" src="assets/images/t2.jpg" alt /></Link>
                </div>
                <div className="team-hover">
                  <div className="desk">
                    <h4><Link id="link" to="/agent-single">Meet Me</Link></h4>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur </p>
                  </div>
                  <div className="s-link">
                    <Link id="link" to="/#"><span className="fa fa-facebook" /></Link>
                    <Link id="link" to="/#"><span className="fa fa-twitter" /></Link>
                    <Link id="link" to="/#"><span className="fa fa-google-plus" /></Link>
                  </div>
                </div>
              </div>
              <div className="team-title">
                <h5><Link id="link" to="/agent-single">Franklin Harbet</Link></h5>
                <span>founder &amp; ceo</span>
              </div>
            </div>
            <div className="teams-gd col-lg-3 col-sm-6 mt-lg-0 mt-4">
              <div className="team-member">
                <div className="team-img">
                  <Link id="link" to="/agent-single"><img className="img-fluid" src="assets/images/t3.jpg" alt /></Link>
                </div>
                <div className="team-hover">
                  <div className="desk">
                    <h4><Link id="link" to="/agent-single">Meet Me</Link></h4>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur </p>
                  </div>
                  <div className="s-link">
                    <Link id="link" to="/#"><span className="fa fa-facebook" /></Link>
                    <Link id="link" to="/#"><span className="fa fa-twitter" /></Link>
                    <Link id="link" to="/#"><span className="fa fa-google-plus" /></Link>
                  </div>
                </div>
              </div>
              <div className="team-title">
                <h5><Link id="link" to="/agent-single">Franklin Harbet</Link></h5>
                <span>founder &amp; ceo</span>
              </div>
            </div>
            <div className="teams-gd col-lg-3 col-sm-6 mt-lg-0 mt-4">
              <div className="team-member">
                <div className="team-img">
                  <Link id="link" to="/agent-single"><img className="img-fluid" src="assets/images/t1.jpg" alt /></Link>
                </div>
                <div className="team-hover">
                  <div className="desk">
                    <h4><Link id="link" to="/agent-single">Meet Me</Link></h4>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur </p>
                  </div>
                  <div className="s-link">
                    <Link id="link" to="/#"><span className="fa fa-facebook" /></Link>
                    <Link id="link" to="/#"><span className="fa fa-twitter" /></Link>
                    <Link id="link" to="/#"><span className="fa fa-google-plus" /></Link>
                  </div>
                </div>
              </div>
              <div className="team-title">
                <h5><Link id="link" to="/agent-single">Linda Anderson</Link></h5>
                <span>founder &amp; ceo</span>
              </div>
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

export default About;
