import React from "react";
import logo from "../assets/atc-whole-logo.png";
import search from "../assets/search-24px.png";
import downArrow from "../assets/arrow_drop_down-24px.svg";
import { useAuth } from "../context/auth-context";
import userProfile from "../assets/userProfile.png"


const Header = () => {
  const { joinToggle, setSignupToggle } = useAuth();

  return (
    <div className="d-none d-sm-block" style={{ maxWidth: "100vw" }}>
      <div className="d-flex justify-content-between align-items-center gap-3 container py-3">
        <img src={logo} alt="logo" className="vw-25" />

        <div className="input-group" style={{ width: "360px" }}>
          <span
            className="input-group-text rounded-start-5 border-0"
            id="basic-addon1"
            style={{ backgroundColor: "#F2F2F2" }}
          >
            <img src={search} alt="search-icon" />
          </span>
          <input
            type="search"
            class="form-control me-2 rounded-end-5 w-25 border-0"
            placeholder="Search for your favorite groups in ATG"
            aria-label="Search"
            aria-describedby="basic-addon1"
            style={{ backgroundColor: "#F2F2F2", fontSize: "1vw" }}
          />
        </div>

        <div
          className="d-block"
          style={{ fontSize: "1.2vw", cursor: "pointer" }}
          onClick={() => setSignupToggle(true)}
        >
          {!joinToggle ? (
            <>
              Create account.
              <span className="fw-bold px-2" style={{ color: "#2F6CE5" }}>
            
                It’s free!
                <img
                  src={downArrow}
                  alt="down-arrow"
                  className="img-fluid"
                />
              </span>
            </>
          ) : (
            <div className="d-flex align-items-center gap-2">
            <img src={userProfile} alt="user profile" />
            <p className="m-0" style={{fontSize: "14px"}}>Siddharth Goyal</p>
            <img src={downArrow} alt="down arrow" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
