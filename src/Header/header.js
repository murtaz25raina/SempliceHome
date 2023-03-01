import Logo from "../assets/logo_black.svg";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <img className="header-logo" src={Logo} alt="Semplice Logo" />
      <div className="header-page-links">
        <div
          className="header-links"
          style={{
            position: "relative",
            left: "15px",
          }}
        >
          SEMPLICE V6 <sup className="header-new-superscript">NEW</sup>
        </div>
        <div className="header-links">SHOWCASE</div>
        <div className="header-links">FEATURES</div>
        <div className="header-links">RESOURCES</div>
        <div className="header-dot-container">
          <span className="header-dot"></span>
          <span className="header-dot"></span>
          <span className="header-dot"></span>
        </div>
      </div>
      <button className="header-button">GET SEMPLICE</button>
    </div>
  );
};

export default Header;
