import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Loginmain/>
    </div>
  )
}
function Loginmain(){
    return(
        <>
        <section className="w3l-forms-23">
  <div id="forms23-block">
    <div className="wrapper">
      <div className="logo1">
        <Link className="brand-logo" to="/index"><span>Renting</span>Properties</Link>
        {/* if logo is image enable this   
                  <Link class="brand-logo" to="/#index">
                      <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                  </Link> */}
      </div>
      <div className="d-grid forms23-grids">
        <div className="form23">
          <h6>Login with your site account</h6>
          <form action="#" method="GET">
            <input type="email" name="username" placeholder="Email" required="required" />
            <input type="password" name="password" placeholder="Password" required="required" />
            <Link to="/#URL">Forgot your password?</Link>
            <button type="submit">Login</button>
          </form>
          <p>Not a member yet? <Link to="/signup">Register now</Link></p>
        </div>
        <div className="frm-tp">
          <div className="form23-text">
            <h6>Connect with</h6>
            <div className="form23-text-top">
              <Link to="/#facebook">
                <div className="signin facebook">
                  <span className="fa fa-facebook" aria-hidden="true" />
                  <p className="action">Facebook</p>
                </div>
              </Link>
              <Link to="/#google-plus">
                <div className="signin google-plus">
                  <span className="fa fa-google-plus" aria-hidden="true" />
                  <p className="action">Google</p>
                </div>
              </Link>
              <Link to="/#twitter">
                <div className="signin twitter">
                  <span className="fa fa-twitter" aria-hidden="true" />
                  <p className="action">Twitter</p>
                </div>
              </Link>
              <Link to="/#linkedin">
                <div className="signin linkedin">
                  <span className="fa fa-linkedin" aria-hidden="true" />
                  <p className="action">Linkedin</p>
                </div>
              </Link>
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
export default Login
