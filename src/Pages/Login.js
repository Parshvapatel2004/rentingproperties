import React from 'react'

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
        <a className="brand-logo" href="index.html"><span>E-</span>Property</a>
        {/* if logo is image enable this   
                  <a class="brand-logo" href="#index.html">
                      <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                  </a> */}
      </div>
      <div className="d-grid forms23-grids">
        <div className="form23">
          <h6>Login with your site account</h6>
          <form action="#" method="GET">
            <input type="email" name="username" placeholder="Email" required="required" />
            <input type="password" name="password" placeholder="Password" required="required" />
            <a href="#URL">Forgot your password?</a>
            <button type="submit">Login</button>
          </form>
          <p>Not a member yet? <a href="signup.html">Register now</a></p>
        </div>
        <div className="frm-tp">
          <div className="form23-text">
            <h6>Connect with</h6>
            <div className="form23-text-top">
              <a href="#facebook">
                <div className="signin facebook">
                  <span className="fa fa-facebook" aria-hidden="true" />
                  <p className="action">Facebook</p>
                </div>
              </a>
              <a href="#google-plus">
                <div className="signin google-plus">
                  <span className="fa fa-google-plus" aria-hidden="true" />
                  <p className="action">Google</p>
                </div>
              </a>
              <a href="#twitter">
                <div className="signin twitter">
                  <span className="fa fa-twitter" aria-hidden="true" />
                  <p className="action">Twitter</p>
                </div>
              </a>
              <a href="#linkedin">
                <div className="signin linkedin">
                  <span className="fa fa-linkedin" aria-hidden="true" />
                  <p className="action">Linkedin</p>
                </div>
              </a>
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
