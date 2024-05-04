import React from 'react'
import { useAuth } from "../context/auth-context";
import closeIcon from "../assets/cancel-24px.png"
import fbLogo from "../assets/f_logo_RGB-Blue_1024.png"
import googleLogo from "../assets/search.png"
import lightCloseIcon from "../assets/light-cancel-24px.png"
import signupHeroImg from "../assets/signup-hero-img.png"

const Login = () => {
    const { loginToggle, setSignupToggle, setLoginToggle, setJoinToggle } = useAuth();

    return (
      <>
        {loginToggle && (
          <div className="d-flex flex-column d-md-none position-absolute vh-100 vw-100 z-3 position-fixed">
            <div className="bg-black h-50 opacity-25"></div>
  
            <div className="h-50 text-white bg-white w-100 h-100 opacity-100 d-block rounded-top-3 p-4">
              <div className="pb-2 d-flex align-content-center justify-content-between">
                  <h5 className="text-black fw-bold">Welcome back!</h5>
                  <img src={closeIcon} alt="close btn" className="img-fluid" style={{width: '25px', height:"25px"}} onClick={() => setLoginToggle(false)} />
              </div>
              <form class="row g-0">
                
                <div class="col-md-6">
                  <input
                    type="email"
                    placeholder="Email"
                    class="form-control rounded-0"
                    id="inputEmail4"
                    style={{backgroundColor: "#F7F8FA"}}
                  />
                </div>
  
                <div class="col-md-6">
                  <input
                    placeholder="Password"
                    type="password"
                    class="form-control rounded-0"
                    id="inputPassword4"
                    style={{backgroundColor: "#F7F8FA"}}
                  />
                </div>
  
  
                <div class="col-12 d-flex justify-content-between align-items-center my-3">
                  <button type="submit" class="btn btn-primary rounded-pill px-4" onClick={(e) => {e.preventDefault(); setJoinToggle(true); setSignupToggle(false)}}>
                    Sign In
                  </button>
                  <p className="m-0" style={{color: "#495057"}} onClick={() => { setSignupToggle(true); setLoginToggle(false)}}><u>or, Create Account</u></p>
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
                  <p className="text-center mx-5 mt-4" style={{color: "#495057", fontSize: "3vw"}}>Forgot Password?</p>
                </div>
  
              </form>
            </div>
          </div>
        )}


{loginToggle && (
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
                      onClick={() => setLoginToggle(false)}
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
                    <h5 className="text-black fw-bold">Sign In</h5>
                    
                  </div>
                  <form class="row g-0">
                    


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
                        Sign In
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

                  <div class="col-md-12 mt-4">
                      <p
                        className="text-center fw-bold"
                        style={{ color: "#495057", fontSize: "0.8vw" }}
                      >
                        Forgot Password?
                      </p>
                    </div>
                </div>

                <div className="w-50">
                   <div className="d-flex flex-row-reverse justify-content-between">
                     <p
                        className="m-0"
                        style={{ color: "#495057", fontSize: "12px" }}
                        onClick={() => {
                          setSignupToggle(false);
                          setLoginToggle(true);
                        }}

                      >
                       Don't have an account yet? <span className="fw-bold" style={{color: "#2F6CE5", cursor: "pointer"}}>Create new for free!</span>
                      </p>
                   </div>

                   <div>
                    <img src={signupHeroImg} alt="hero img" />
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
}

export default Login