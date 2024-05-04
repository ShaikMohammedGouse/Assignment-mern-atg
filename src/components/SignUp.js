import React from "react";
import { useAuth } from "../context/auth-context";
import closeIcon from "../assets/cancel-24px.png";
import fbLogo from "../assets/f_logo_RGB-Blue_1024.png";
import googleLogo from "../assets/search.png";
import signupHeroImg from "../assets/signup-hero-img.png"
import lightCloseIcon from "../assets/light-cancel-24px.png"

const SignUp = () => {
  const { signupToggle, setSignupToggle, setLoginToggle, setJoinToggle } =
    useAuth();

  return (
    <>
      {signupToggle && (
        <div className="d-flex flex-column d-md-none position-absolute vh-100 vw-100 z-3 position-fixed">
          <div className="bg-black h-50 opacity-25"></div>

          <div className="h-50 bg-white w-100 h-100 opacity-100 d-block rounded-top-3 p-4">
            <div className="pb-2 d-flex align-content-center justify-content-between">
              <h5 className="text-black fw-bold">Create Account</h5>
              <img
                src={closeIcon}
                alt="close btn"
                className="img-fluid"
                style={{ width: "25px", height: "25px" }}
                onClick={() => setSignupToggle(false)}
              />
            </div>
            <form class="row g-0">
              <div class="col-6">
                <input
                  type="first name"
                  placeholder="First Name"
                  class="form-control rounded-0 bg-gray"
                  id="inputEmail4"
                  style={{ backgroundColor: "#F7F8FA" }}
                />
              </div>

              <div class="col-6">
                <input
                  type="last name"
                  placeholder="Last Name"
                  class="form-control rounded-0"
                  id="inputEmail4"
                  style={{ backgroundColor: "#F7F8FA" }}
                />
              </div>

              <div class="col-md-6">
                <input
                  type="email"
                  placeholder="Email"
                  class="form-control rounded-0"
                  id="inputEmail4"
                  style={{ backgroundColor: "#F7F8FA" }}
                />
              </div>

              <div class="col-md-6">
                <input
                  placeholder="Password"
                  type="password"
                  class="form-control rounded-0"
                  id="inputPassword4"
                  style={{ backgroundColor: "#F7F8FA" }}
                />
              </div>

              <div class="col-md-6">
                <input
                  placeholder="Confirm Password"
                  type="confirm password"
                  class="form-control rounded-0"
                  id="inputPassword4"
                  style={{ backgroundColor: "#F7F8FA" }}
                />
              </div>

              <div class="col-12 d-flex justify-content-between align-items-center my-3">
                <button
                  type="submit"
                  class="btn btn-primary rounded-pill"
                  onClick={(e) => {
                    e.preventDefault();
                    setJoinToggle(true);
                    setSignupToggle(false);
                  }}
                >
                  Create Account
                </button>
                <p
                  className="m-0"
                  style={{ color: "#495057" }}
                  onClick={() => {
                    setSignupToggle(false);
                    setLoginToggle(true);
                  }}
                >
                  <u>or, Sign In</u>
                </p>
              </div>

              <div class="col-md-12 pb-1">
                <button className="btn btn-outline-secondary form-control d-flex align-items-center justify-content-center gap-2">
                  <img src={fbLogo} alt="fb logo" />
                  Sign up with Facebook
                </button>
              </div>

              <div class="col-md-12">
                <button className="btn btn-outline-secondary form-control d-flex align-items-center justify-content-center gap-2">
                  <img src={googleLogo} alt="google logo" />
                  Sign up with Google
                </button>
              </div>

              <div class="col-md-12">
                <p
                  className="text-center mx-5 mt-4"
                  style={{ color: "#495057", fontSize: "3vw" }}
                >
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {signupToggle && (
        <div className="d-none d-md-flex flex-column m-0 position-absolute vh-100 vw-100 z-3 position-fixed">
            {/* child 1 */}
          <div className="bg-black h-25 opacity-50"></div>

           {/* child 2 */}
          <div className="d-flex">
            {/* sub-child 1 */}
            <div className="bg-black w-25 opacity-50"></div>

            {/* sub-child 2 */}
            <div className="h-50 bg-white w-75 h-100 opacity-100 d-flex flex-column rounded-3 position-relative">
            <img
                      src={lightCloseIcon}
                      alt="close btn"
                      className="img-fluid position-absolute"
                      style={{ width: "25px", height: "25px", top: "-10%", right: 0, cursor: "pointer" }}
                      onClick={() => setSignupToggle(false)}
                    />
              <div
                className="px-4 py-2 rounded-3"
                style={{ backgroundColor: "#EFFFF4", color: "#008A45" }}
              >
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </div>

              <div className="d-flex p-5 gap-3 ">
            
                <div className="  w-50">
                  <div className="pb-2 d-flex align-content-center justify-content-between">
                    <h5 className="text-black fw-bold">Create Account</h5>
                    
                  </div>
                  <form class="row g-0">
                    <div class="col-6">
                      <input
                        type="first name"
                        placeholder="First Name"
                        class="form-control rounded-0 bg-gray"
                        id="inputEmail4"
                        style={{ backgroundColor: "#F7F8FA" }}
                      />
                    </div>

                    <div class="col-6">
                      <input
                        type="last name"
                        placeholder="Last Name"
                        class="form-control rounded-0"
                        id="inputEmail4"
                        style={{ backgroundColor: "#F7F8FA" }}
                      />
                    </div>

                    <div class="col-md-12">
                      <input
                        type="email"
                        placeholder="Email"
                        class="form-control rounded-0"
                        id="inputEmail4"
                        style={{ backgroundColor: "#F7F8FA" }}
                      />
                    </div>

                    <div class="col-md-12">
                      <input
                        placeholder="Password"
                        type="password"
                        class="form-control rounded-0"
                        id="inputPassword4"
                        style={{ backgroundColor: "#F7F8FA" }}
                      />
                    </div>

                    <div class="col-md-12">
                      <input
                        placeholder="Confirm Password"
                        type="confirm password"
                        class="form-control rounded-0"
                        id="inputPassword4"
                        style={{ backgroundColor: "#F7F8FA" }}
                      />
                    </div>

                    <div class="col-12 d-flex justify-content-between align-items-center my-4">
                      <button
                        type="submit"
                        class="col-12 btn btn-primary rounded-pill"
                        onClick={(e) => {
                          e.preventDefault();
                          setJoinToggle(true);
                          setSignupToggle(false);
                        }}
                      >
                        Create Account
                      </button>
                     
                    </div>

                    <div class="col-md-12 pb-3">
                      <button className="btn btn-outline-secondary form-control d-flex align-items-center justify-content-center gap-2">
                        <img src={fbLogo} alt="fb logo" />
                        Sign up with Facebook
                      </button>
                    </div>

                    <div class="col-md-12">
                      <button className="btn btn-outline-secondary form-control d-flex align-items-center justify-content-center gap-2">
                        <img src={googleLogo} alt="google logo" />
                        Sign up with Google
                      </button>
                    </div>

                    
                  </form>
                </div>

                <div className="w-50">
                   <div className="d-flex flex-row-reverse justify-content-between">
                     <p
                        className="m-0"
                        style={{ color: "#495057", fontSize: "12px" }}
                       
                      >
                       Already have an account? <span className="fw-bold" style={{color: "#2F6CE5", cursor: "pointer"}}  onClick={() => {
                          setSignupToggle(false);
                          setLoginToggle(true);
                        }}
>or, Sign In</span>
                      </p>
                   </div>

                   <div>
                    <img src={signupHeroImg} alt="hero img" />
                   </div>

                   <div class="col-md-12">
                      <p
                        className="text-center"
                        style={{ color: "#495057", fontSize: "0.8vw" }}
                      >
                        By signing up, you agree to our Terms & conditions,
                        Privacy policy
                      </p>
                    </div>
                </div>
              </div>
            </div>

            {/* sub-child 3 */}
            <div className="bg-black w-25 opacity-50"></div>
          </div>

           {/* child 3 */}
          <div className="bg-black h-25 opacity-50"></div>
        </div>
      )}
    </>
  );
};

export default SignUp;
