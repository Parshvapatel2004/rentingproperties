import React from 'react'
import Header from '../Common/Header'
import Banner from '../Common/Banner'
import Footer from '../Common/Footer'

const SearchResult = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <SearchResultMain/>
      <Footer/>
    </div>
  )
}
function SearchResultMain(){
    return(<>
    <section className="grids-2">
  <div id="grids4-block" className="py-5">
    <div className="container py-md-3">
      <div className="row mt-5 pt-3">
        <div className="grids4-info  col-lg-4 col-md-6">
          <a href="properties-single.html"><img src="assets/images/g12.jpg" className="img-fluid" alt /></a>
          <div className="info-bg">
            <h5><a href="properties-single.html">84 Woodland St. Cocoa</a></h5>
            <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
            <ul>
              <li><span className="fa fa-bed" /> 4 Beds</li>
              <li><span className="fa fa-bath" /> 3 Baths</li>
              <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
            </ul>
          </div>
        </div>
        <div className="grids4-info col-lg-4 col-md-6 mt-md-0 mt-4">
          <a href="properties-single.html"><img src="assets/images/g11.jpg" className="img-fluid" alt /></a>
          <div className="info-bg">
            <h5><a href="properties-single.html">28 Westport Dr. Warminster</a></h5>
            <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
            <ul>
              <li><span className="fa fa-bed" /> 3 Beds</li>
              <li><span className="fa fa-bath" /> 2 Baths</li>
              <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
            </ul>
          </div>
        </div>
        <div className="grids4-info col-lg-4 col-md-6 mt-lg-0 mt-4">
          <a href="properties-single.html"><img src="assets/images/g10.jpg" className="img-fluid" alt /></a>
          <div className="info-bg">
            <h5><a href="properties-single.html">32 Pawnee Street Butte</a></h5>
            <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
            <ul>
              <li><span className="fa fa-bed" /> 4 Beds</li>
              <li><span className="fa fa-bath" /> 3 Baths</li>
              <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
            </ul>
          </div>
        </div>
        <div className="grids4-info  col-lg-4 col-md-6 mt-4">
          <a href="properties-single.html"><img src="assets/images/g9.jpg" className="img-fluid" alt /></a>
          <div className="info-bg">
            <h5><a href="properties-single.html">2 Glen Creek St. Alexandria</a></h5>
            <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
            <ul>
              <li><span className="fa fa-bed" /> 5 Beds</li>
              <li><span className="fa fa-bath" /> 3 Baths</li>
              <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
            </ul>
          </div>
        </div>
        <div className="grids4-info  col-lg-4 col-md-6 mt-4">
          <a href="properties-single.html"><img src="assets/images/g8.jpg" className="img-fluid" alt /></a>
          <div className="info-bg">
            <h5><a href="properties-single.html">798 Talbot St. Bridgewater</a></h5>
            <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
            <ul>
              <li><span className="fa fa-bed" /> 2 Beds</li>
              <li><span className="fa fa-bath" /> 1 Baths</li>
              <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
            </ul>
          </div>
        </div>
        <div className="grids4-info  col-lg-4 col-md-6 mt-4">
          <a href="properties-single.html"><img src="assets/images/g7.jpg" className="img-fluid" alt /></a>
          <div className="info-bg">
            <h5><a href="properties-single.html">7240C Argyle St. Lawndale</a></h5>
            <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
            <ul>
              <li><span className="fa fa-bed" /> 4 Beds</li>
              <li><span className="fa fa-bath" /> 3 Baths</li>
              <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>);
}


export default SearchResult
