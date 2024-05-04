import arrow from "../assets/arrow_back_24px.svg";
import { useAuth} from "../context/auth-context";

const HeroSection = () => {
 const {joinToggle, setSignupToggle} =  useAuth();

  return (
    <div className="container-fluid p-0 position-relative">
      <div className="w-100">
       
        <div className="img-gradient img-fluid">
        <img
          src={arrow}
          alt="arrow"
          className="d-block d-sm-none position-absolute top-0 start-0 m-3 z-10"
        />

          <button className="d-block d-sm-none position-absolute top-0 end-0 m-3 bg-transparent border-1 border-white rounded text-white px-2 py-1" onClick={() => { setSignupToggle(true)}}>
           {!joinToggle ?  "Join Group" : "Leave Group"}
          </button>

          <div className="position-absolute bottom-0 start-0 mb-6 m-3 bg-transparent border-1 border-white rounded text-white long-margin">
          <h3 className="my-1 text-white fw-bold d-none d-md-block" style={{fontSize: "2.5vw"}}>
          Computer Engineering
          </h3>
          <h3 className="my-1 text-white fw-bold d-block d-md-none" style={{fontSize: "6vw"}}>
          Computer Engineering
          </h3>
          <p className="fw-light d-none d-md-block" style={{fontSize: "1.2vw"}}>142,765 Computer Engineers follow this</p>
          <p className="fw-light d-block d-md-none" style={{fontSize: "3vw"}}>142,765 Computer Engineers follow this</p>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
