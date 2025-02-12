import React from 'react'

const Banner = () => {
  return (
    <div>
      <section className="w3l-inner-banner-main">
  <div className="about-inner">
    <div className="container">
      <ul className="breadcrumbs-custom-path">
        <h3>About</h3>
        <li>
          <Link to="/index">
            <span className="fa fa-home" aria-hidden="true" />
            <span className="fa fa-angle-double-right" aria-hidden="true" />
          </Link>
        </li>
        <li className="active">About</li>
      </ul>
    </div>
  </div>
</section>

    </div>
  );
}

export default Banner
