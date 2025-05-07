import '../styling/LandingPage.css';
import '../styling/basestyling.css';
import logo from '../assets/logo.png'; 

export default function LandingPage() {
  return (
    <div className="landingpage-wrapper">
      <img className="logo" src={logo} alt="Logotype" /> 
      <h1>Where It's @</h1>
      <h3>Ticketing made easy</h3>
    </div>
  );
}
