import "./App.css";
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  function showAuthentication() {
    navigate("/authentication");
  }

  return (
    <div id="container">
      <div id="header">
        <div className="headerlogo">
          <img src="/image1.png" alt="Weather Logo" />
        </div>
        <div className="headertext">
          <span>Live </span>
          Weather Monitoring System
        </div>
        <div className="signinSection">
          <img className="userlogo" src="/user.png" alt="User Logo" onClick={showAuthentication}/>
          <span className="signinText" onClick={showAuthentication}>
            Sign In
          </span>
        </div>
      </div>
      <div id="content">
        <div className="contenttext1">Real-Time Weather Intelligence Powered by IoT</div>
        <div className="contenttext2">
          Monitor temperature, humidity, pressure, wind speed, rainfall, and air quality in real time through an interactive dashboard.<br />
          Analyze historical trends, receive instant updates, and make informed decisions with accurate environmental data.
        </div>
        <div className="contenttext3">
          Live Data | Interactive Charts | Anywhere Access | Real-Time Updates
        </div>
      </div>
      <div id="footer">
        <div className="footertext">Copyright © 2026 Weather Monitoring System. All rights reserved.</div>
        <div className="socialIcons">
          <img className="socialmediaicon" src="/image4.png" alt="Facebook Logo" />
          <img className="socialmediaicon" src="/image3.png" alt="Twitter Logo" />
          <img className="socialmediaicon" src="/image2.png" alt="LinkedIn Logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
