import BuildingWithPride from "../assets/building_with_pride.svg";
import FooterImg from '../assets/footer_temp.jpg';
import BottomRight from '../assets/bottom-right.svg'
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="building-with-pride-container">
          <img
            src={BuildingWithPride}
            alt="#"
            className="building-with-pride"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row", height: "auto",marginBottom:'60px' }}>
          <div className="left-side-container-footer">
            <div className="left-side-container-footer-left">
              <div className="footer-links">
                <sup>01</sup>
                <div className="footer-link-text">Reviews</div>
              </div>
              <div className="footer-links">
                <sup>02</sup>
                <div className="footer-link-text">Why Semplice</div>
              </div>
              <div className="footer-links">
                <sup>03</sup>
                <div className="footer-link-text">Video Tutorials</div>
              </div>
            </div>
            <div className="left-side-container-footer-right">
              <div className="footer-links">
                <sup>04</sup>
                <div className="footer-link-text">Supply</div>
              </div>
              <div className="footer-links">
                <sup>05</sup>
                <div className="footer-link-text">Developers</div>
              </div>
              <div className="footer-links">
                <sup>06</sup>
                <div className="footer-link-text">Get Support</div>
              </div>
            </div>
          </div>
          <div className="right-side-container-footer">
            <div className="tips-and-tricks">Tips and Tricks</div>
            <div className="tips-and-tricks-body">
              <div className="arrow-and-text-tat">
                <span>→</span>
                <div  className="text-tat">Hosting for Semplice</div>
              </div>
              <div className="arrow-and-text-tat">
                <span>→</span>
                <div className="text-tat"> Creating your first portfolio</div>
              </div>
              <div className="arrow-and-text-tat">
                <span>→</span>
                <div className="text-tat">Our favorite type foundries</div>
              </div>
              <div className="arrow-and-text-tat">
                <span>→</span>
                <div className="text-tat">How to write case studies</div>
              </div>
              <div className="arrow-and-text-tat">
                <span>→</span>
                <div className="text-tat">How to launch your portfolio</div>
              </div>
              <div className="arrow-and-text-tat">
                <span>→</span>
                <div className="text-tat">How to hire a UX designer</div>
              </div>
              <div className="arrow-and-text-tat">
                <span>→</span>
                <div className="text-tat">How to create your about page</div>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="frame-and-singup-container">
            <div className="col-8">
                <img src={FooterImg} alt="#" width="100%"/>
            </div>
            <div className="col-4">
                <div className="signup-form">
                    <div className="email-text-container">
                    <input style={{borderBottom: '1px solid rgba(0,0,0,.08)',paddingBottom:'10px'}} type="email" placeholder="Email Address"/>
                    <input type="text" style={{paddingTop: '20px'}} placeholder="Your Name"/>
                    </div>
                    <button className="signup">SIGN UP</button>
                </div>
            </div>
        </div>
        <div className="page-bottom">
            <div className="page-bottom-left">
            <div className="page-bottom-left-text">PRIVACY POLICY</div>
            <div className="page-bottom-left-text">TERMS AND CONDITIONS</div>
            <div className="page-bottom-left-text">IMPRINT</div>
            </div>
            <div className="page-bottom-right">
                <img className="page-bottom-right-image" src={BottomRight} alt=""/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
