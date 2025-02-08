import React from 'react'
import Header from '../Common/Header'
import Banner from '../Common/Banner'
import Footer from '../Common/Footer'

const Blog = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Blogbody/>
      <Footer/>
    </div>
  )
}
function Blogbody(){
    return(
        <><div className="w3l-grids-block-10">
  {/* grids block 10 */}
  <section id="grids10-block" className="py-5">
    <div className="container py-md-3">
      <div className="row">
        <div className="grids10-info col-lg-4 col-md-6">
          <a href="blog-single.html"><img src="assets/images/g9.jpg" alt /></a>
          <div className="blog-info">
            <ul>
              <li><a href="#"><span className="fa fa-calendar-o" aria-hidden="true" /> November 25,2019</a></li>
              <li><a href="#"><span className="fa fa-comments-o" aria-hidden="true" /> 15</a></li>
            </ul>
            <h4><a href="blog-single.html">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </a></h4>
          </div>
        </div>
        <div className="grids10-info col-lg-4 col-md-6 mt-md-0 mt-5">
          <a href="blog-single.html"><img src="assets/images/g8.jpg" alt /></a>
          <div className="blog-info">
            <ul>
              <li><a href="#"><span className="fa fa-calendar-o" aria-hidden="true" /> November 25,2019</a></li>
              <li><a href="#"><span className="fa fa-comments-o" aria-hidden="true" /> 15</a></li>
            </ul>
            <h4><a href="blog-single.html">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </a></h4>
          </div>
        </div>
        <div className="grids10-info col-lg-4 col-md-6 mt-lg-0 mt-5">
          <a href="blog-single.html"><img src="assets/images/g7.jpg" alt /></a>
          <div className="blog-info">
            <ul>
              <li><a href="#"><span className="fa fa-calendar-o" aria-hidden="true" /> November 25,2019</a></li>
              <li><a href="#"><span className="fa fa-comments-o" aria-hidden="true" /> 15</a></li>
            </ul>
            <h4><a href="blog-single.html">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </a></h4>
          </div>
        </div>
        <div className="grids10-info col-lg-4 col-md-6 mt-5">
          <a href="blog-single.html"><img src="assets/images/g6.jpg" alt /></a>
          <div className="blog-info">
            <ul>
              <li><a href="#"><span className="fa fa-calendar-o" aria-hidden="true" /> November 25,2019</a></li>
              <li><a href="#"><span className="fa fa-comments-o" aria-hidden="true" /> 15</a></li>
            </ul>
            <h4><a href="blog-single.html">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </a></h4>
          </div>
        </div>
        <div className="grids10-info col-lg-4 col-md-6 mt-5">
          <a href="blog-single.html"><img src="assets/images/g5.jpg" alt /></a>
          <div className="blog-info">
            <ul>
              <li><a href="#"><span className="fa fa-calendar-o" aria-hidden="true" /> November 25,2019</a></li>
              <li><a href="#"><span className="fa fa-comments-o" aria-hidden="true" /> 15</a></li>
            </ul>
            <h4><a href="blog-single.html">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </a></h4>
          </div>
        </div>
        <div className="grids10-info col-lg-4 col-md-6 mt-5">
          <a href="blog-single.html"><img src="assets/images/g4.jpg" alt /></a>
          <div className="blog-info">
            <ul>
              <li><a href="#"><span className="fa fa-calendar-o" aria-hidden="true" /> November 25,2019</a></li>
              <li><a href="#"><span className="fa fa-comments-o" aria-hidden="true" /> 15</a></li>
            </ul>
            <h4><a href="blog-single.html">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </a></h4>
          </div>
        </div>
        <div className="grids10-info col-lg-4 col-md-6 mt-5">
          <a href="blog-single.html"><img src="assets/images/g3.jpg" alt /></a>
          <div className="blog-info">
            <ul>
              <li><a href="#"><span className="fa fa-calendar-o" aria-hidden="true" /> November 25,2019</a></li>
              <li><a href="#"><span className="fa fa-comments-o" aria-hidden="true" /> 15</a></li>
            </ul>
            <h4><a href="blog-single.html">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </a></h4>
          </div>
        </div>
        <div className="grids10-info col-lg-4 col-md-6 mt-5">
          <a href="blog-single.html"><img src="assets/images/g2.jpg" alt /></a>
          <div className="blog-info">
            <ul>
              <li><a href="#"><span className="fa fa-calendar-o" aria-hidden="true" /> November 25,2019</a></li>
              <li><a href="#"><span className="fa fa-comments-o" aria-hidden="true" /> 15</a></li>
            </ul>
            <h4><a href="blog-single.html">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </a></h4>
          </div>
        </div>
        <div className="grids10-info col-lg-4 col-md-6 mt-5">
          <a href="blog-single.html"><img src="assets/images/g1.jpg" alt /></a>
          <div className="blog-info">
            <ul>
              <li><a href="#"><span className="fa fa-calendar-o" aria-hidden="true" /> November 25,2019</a></li>
              <li><a href="#"><span className="fa fa-comments-o" aria-hidden="true" /> 15</a></li>
            </ul>
            <h4><a href="blog-single.html">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </a></h4>
          </div>
        </div>
      </div>
      <div className="pagination">
        <ul>
          <li> <a href="#none" className="not-allowed" disabled>
              <span className="fa fa-angle-double-left" aria-hidden="true" />
            </a>
          </li>
          <li><a className="active" href="#page">1</a></li>
          <li>
            <a href="#page">2</a>
          </li>
          <li>
            <a href="#page">3</a>
          </li>
          <li>
            <a href="#page">4</a>
          </li>
          <li>
            <a href="#page">5</a>
          </li>
          <li>
            <a href="#page"><span className="fa fa-angle-double-right" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section></div>


        </>
    );
}

export default Blog
