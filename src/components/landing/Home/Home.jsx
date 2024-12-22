import { MainNav } from "../../common/MainNav/MainNav";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export function Home() {
  return (
    <div>
      <div className ='header1'>
        <MainNav></MainNav>
        </div>
        <br/>
        <Home1></Home1>
  
    </div>
  )
}

 function Home1() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="main-content">
        <div className="inner-container">
          <div className="image">
            <div className="image-box">
              <div className="inner-div">
                <div className="circle" style={{ backgroundColor: "#4fc3f7" }}></div>
                <div className="circle" style={{ backgroundColor: "#81c784" }}></div>
                <div className="circle" style={{ backgroundColor: "#ffb74d" }}></div>
                <div className="circle" style={{ backgroundColor: "#e57373" }}></div>
                <div className="circle round" style={{ backgroundColor: "#4fc3f7" }}></div>
              </div>
            </div>
          </div>

          <div className="text-section">
            <h1>A New Way to Learn</h1>
            <p>
              Practice Hub is the best platform to help you enhance your skills,
              expand your knowledge and prepare for technical interviews.
            </p>
            <button onClick={() => navigate("/signup")}>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
