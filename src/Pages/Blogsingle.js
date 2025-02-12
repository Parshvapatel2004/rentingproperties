import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";

const Blogsingle = () => {
  return (
    <div>
      <Header />
      <Banner />
      <BlogsingleMain/>
      <Footer/>
    </div>
  );
};
function BlogsingleMain() {
  return (
    <>
      <section className="w3l-text-11">
        <div className="text11 py-5">
          <div className="container py-md-3">
            <div className="text11-content">
              <img
                src="assets/images/g11.jpg"
                className="img-responsive margin-top"
                alt
              />
              <ul className="bl-single">
                <li>
                  <Link to="/#">
                    <span className="fa fa-calendar-o" aria-hidden="true" />{" "}
                    November 25,2019
                  </Link>
                </li>
                <li>
                  <Link to="/#">
                    <span className="fa fa-comments-o" aria-hidden="true" /> 15
                  </Link>
                </li>
                <li>
                  <Link to="/#">
                    <span className="fa fa-user" aria-hidden="true" />{" "}
                    Williamson
                  </Link>
                </li>
              </ul>
              <h4 className="heading"> Donec ipsum faucibus arcu elementum</h4>
              <p>
                Fusce faucibus ante vitae justo efficitur elementum. Donec ipsum
                faucibus arcu elementum, luctus justo. ac purus semper. Fusce
                faucibus ante vitae justo efficitur elementum. Donec ipsum
                faucibus arcu elementum, luctus justo. ac purus semper."
              </p>
              <p>
                Efficitur fusce faucibus ante vitae justo elementum. Donec ipsum
                faucibus arcu elementum, luctus justo. ac purus semper. Fusce
                faucibus ante vitae justo efficitur elementum. Donec ipsum
                faucibus arcu elementum, luctus justo. ac purus semper. Fusce
                faucibus ante vitae justo efficitur elementum. Donec ipsum
                faucibus arcu elementum, luctus justo. ac purus semper.
              </p>
              <div className="comments">
                <h3 className="aside-title ">Recent Comments</h3>
                <div className="comments-grids">
                  <div className="media">
                    <img
                      className="img-responsive"
                      src="assets/images/te1.jpg"
                      alt="placeholder image"
                    />
                    <div className="media-body comments-grid-right">
                      <h4>
                        <Link to="/#">Henry Nicholas</Link>
                      </h4>
                      <ul className>
                        <li className>15 Oct 2019</li>
                      </ul>
                      <p>
                        Nullam facilisis diam non magna porta luctus. Aenean
                        facilisis erat posuere erat ornare ultrices. Aliquam ac
                        arcu interdum,Aliquam ac arcu interdum, dapibus nibh
                        convallis, semper augue.
                      </p>
                      <Link to="/#comment" className="replay">
                        <span className="fa fa-reply" /> Reply
                      </Link>
                    </div>
                  </div>
                  <div className="media second-part">
                    <img
                      className="img-responsive"
                      src="assets/images/te2.jpg"
                      alt="placeholder image"
                    />
                    <div className="media-body comments-grid-right">
                      <h4>
                        <Link to="/#">Shane Jessey</Link>
                      </h4>
                      <ul className>
                        <li className>20 Oct 2019</li>
                      </ul>
                      <p>
                        Nullam facilisis diam non magna porta luctus. Aenean
                        facilisis erat posuere erat ornare ultrices. Aliquam ac
                        arcu interdum,Aliquam ac arcu interdum, dapibus nibh
                        convallis, semper augue.
                      </p>
                      <Link to="/#comment" className="replay">
                        <span className="fa fa-reply" /> Reply
                      </Link>
                    </div>
                  </div>
                  <div className="media third-part">
                    <img
                      className="img-responsive"
                      src="assets/images/te3.jpg"
                      alt="placeholder image"
                    />
                    <div className="media-body comments-grid-right">
                      <h4>
                        <Link to="/#">John Cena</Link>
                      </h4>
                      <ul className>
                        <li className>25 Oct 2019</li>
                      </ul>
                      <p>
                        Nullam facilisis diam non magna porta luctus. Aenean
                        facilisis erat posuere erat ornare ultrices. Aliquam ac
                        arcu interdum,Aliquam ac arcu interdum, dapibus nibh
                        convallis, semper augue.
                      </p>
                      <Link to="/#comment" className="replay">
                        <span className="fa fa-reply" /> Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="leave-comment-form" id="comment">
                <h3 className="aside-title">Leave your comment</h3>
                <form action="#" method="post">
                  <div className="input-grids">
                    <div className="form-group">
                      <input
                        type="text"
                        name="Name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="Email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="Message"
                      className="form-control"
                      placeholder="Your reply..."
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="submit text-right">
                    <Link to="/#" className="actionbg">
                      Post comment
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogsingle;
