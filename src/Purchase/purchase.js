import { useState } from "react";
import Purchase1 from "../assets/purchase-1.png";
import Purchase2 from "../assets/purchase-2.png";
import Purchase3 from "../assets/purchase-3.png";
import SingleToBusiness from '../assets/single_to_business.svg';
import StudioToBusiness from '../assets/studio_to_business.svg';
import UpgradSingleToStudio from '../assets/upgrade_single_to_studio.svg';
import SempliceUpgrade from '../assets/semplice-upgrade.PNG';
import "./purchase.css";
const Purchase = () => {
  const [hoverStatus, setHoverStatus] = useState("");
  const [hoverButtonStatus,setHoverButtonStatus] = useState("");
  const [upgradeDropdownState,setUpgradeDropdownState] = useState(false);
  return (
    <div style={{display:'flex',flexDirection:'column',background:'white'}}>
      <div className="purchase-div-container">
        <div
          className={hoverStatus === "single" ? "highlighted-card purchaseCards" : "purchaseCards"}
          onMouseEnter={() => setHoverStatus("single")}
          onMouseLeave={() => setHoverStatus("")}
        >
            <img src={Purchase1} alt="p1" className="purchase-images" />
            <h3 className="purchase-card-heading">Single</h3>
            <p className="purchase-card-description">
              For individual creatives. No subscription. You only pay once &
              it's forever yours.
            </p>
            <div className="purchase-card-price">
              <sup>$</sup>119<sup>*</sup>
            </div>
            <div className="purchase-card-savings">You save $29</div>
            <div className="purchase-card-old-price">$148</div>
            <div className={hoverStatus === "single"?"purchase-button yellow-color":"purchase-button"}
            style={hoverButtonStatus==='single'?{background:'black',color:'white'}:{}}
            onMouseEnter={()=>setHoverButtonStatus('single')}
            onMouseLeave={()=>setHoverButtonStatus('')}
            >PURCHASE</div>
            <div className="purchase-card-points">
              <ul className="features single-margin">
                <li title="1 License">
                  <span className="sm-tooltips">1 License</span>
                </li>
                <li>
                  <span className="sm-tooltips">
                    <span className="special-link">Content Editor</span>
                  </span>
                </li>
                <li>
                  <span className="sm-tooltips">
                    <span className="special-link">Fully Responsive</span>
                  </span>
                </li>
                <li>
                  <span className="sm-tooltips">Custom Fontsets</span>
                </li>
                <li>
                  <span className="sm-tooltips">Fullscreen Cover</span>
                </li>
                <li>
                  <span className="sm-tooltips">
                    <span className="special-link">Gallery Slider</span>
                  </span>
                </li>
                <li>
                  <span className="sm-tooltips">
                    <span className="special-link">Dribbble Module</span>
                  </span>
                </li>
                <li>
                  <span className="sm-tooltips">Code Module</span>
                </li>
                <li>
                  <span className="sm-tooltips">Private Projects</span>
                </li>
                <li className="no-checkmark">&amp; more</li>
              </ul>
            </div>
         
        </div>
        <div
          style={{
            position: "relative",
            top: "-60px",
            height:'1760px'
          }}

          className={hoverStatus === "studio" ? "highlighted-card purchaseCards" : "purchaseCards"}
          onMouseEnter={() => setHoverStatus("studio")}
          onMouseLeave={() => setHoverStatus("")}
        >
            {hoverStatus === "studio" ?<div className="most-popular"
            >
                MOST POPULAR
            </div>:<div
            style={{
                position: "relative",
                bottom:  '60px',
                height: '40px'
            }}
            ></div>}
            <img
              style={{ height: "340px" }}
              src={Purchase2}
              alt="p1"
              className="purchase-images"
            />
            <h3 className="purchase-card-heading">Studio</h3>
            <p className="purchase-card-description">
              Great for small studios and agencies, with advanced pro tools. You
              only pay once.
            </p>
            <div className="purchase-card-price">
              <sup>$</sup>168<sup>*</sup>
            </div>
            <div className="purchase-card-savings">You save $61</div>
            <div className="purchase-card-old-price">$229</div>
            <div className={hoverStatus === "studio"?"purchase-button yellow-color":"purchase-button"}
            style={hoverButtonStatus==='studio'?{background:'black',color:'white'}:{}}
             onMouseEnter={()=>setHoverButtonStatus('studio')}
             onMouseLeave={()=>setHoverButtonStatus('')}            
            >PURCHASE</div>
            <div className="purchase-card-points">
              <ul className="features">
                <li className="special">
                  <span className="sm-tooltips">
                    <span className="special-link">Design with Blocks</span>
                  </span>
                </li>
                <li className="special">
                  <span className="sm-tooltips">
                    <span className="special-link">Instagram Module</span>
                  </span>
                </li>
                <li className="special">
                  <span className="sm-tooltips">
                    <span className="special-link">Gallery Grid</span>
                  </span>
                </li>
                <li className="special">
                  <span className="sm-tooltips">
                    <span className="special-link">Before/After Module</span>
                  </span>
                </li>
                <li className="special">
                  <span className="sm-tooltips">
                    <span className="special-link">Advanced Grids</span>
                  </span>
                </li>
                <li className="special">
                  <span className="sm-tooltips">
                    <span className="special-link">MailChimp Module</span>
                  </span>
                </li>
                <li className="special">
                  <span className="sm-tooltips">
                    <span className="special-link">More Navigations</span>
                  </span>
                </li>
                <li title="1 License">
                  <span className="sm-tooltips">1 License</span>
                </li>
                <li>
                  <span className="sm-tooltips">Content Editor</span>
                </li>
                <li>
                  <span className="sm-tooltips">
                    <span className="special-link">Fully Responsive</span>
                  </span>
                </li>
                <li>
                  <span className="sm-tooltips">Custom Fontsets</span>
                </li>
                <li>
                  <span className="sm-tooltips">Fullscreen Cover</span>
                </li>
                <li>
                  <span className="sm-tooltips">
                    <span className="special-link">Gallery Slider</span>
                  </span>
                </li>
                <li>
                  <span className="sm-tooltips">
                    <span className="special-link">Dribbble Module</span>
                  </span>
                </li>
                <li>
                  <span className="sm-tooltips">Code Module</span>
                </li>
                <li>
                  <span className="sm-tooltips">Private Projects</span>
                </li>
                <li className="dezent no-checkmark">
                  <span className="special-link">&amp; more</span>
                </li>
              </ul>
            </div>
          
        </div>
        <div
          className={hoverStatus === "business" ? "highlighted-card purchaseCards" : "purchaseCards"}
          onMouseEnter={() => setHoverStatus("business")}
          onMouseLeave={() => setHoverStatus("")}
        >
            <img src={Purchase3} alt="p1" className="purchase-images" />
            <h3 className="purchase-card-heading">Business</h3>
            <p className="purchase-card-description">
              Run Semplice on 10 domains and use it for your client projects
              commercially.
            </p>
            <div className="purchase-card-price">
              <sup>$</sup>699<sup>*</sup>
            </div>
            <div className="purchase-card-savings">Only $69 per license</div>
            <div className="purchase-card-old-price">$799</div>
            <div  className={hoverStatus === "business"?"purchase-button yellow-color":"purchase-button"}
            style={hoverButtonStatus==='business'?{background:'black',color:'white'}:{}}
             onMouseEnter={()=>setHoverButtonStatus('business')}
             onMouseLeave={()=>setHoverButtonStatus('')}
            >PURCHASE</div>
            <div className="purchase-card-points">
              <p className="business-desk">
                Business includes all Studio edition features, with 10 licenses
                for commercial use.
                <br />
                <br />
                You can update from Single or Studio to business at any time.
              </p>
            </div>
        </div>
      </div>
      <div className="already-have-account" style={upgradeDropdownState?{background:'#1d1d1d'}:{}}>
       <div  className={upgradeDropdownState?"already-have-account-btn-open":"already-have-account-btn"} onClick={()=>setUpgradeDropdownState(!upgradeDropdownState)}>
       Already have Semplice and want to upgrade? ▼
        </div>
        {upgradeDropdownState ? <div className="upgrade-container">
          <div className="upgrade-img-btn">
            <img src={UpgradSingleToStudio} alt="#" className="upgrade-img"/>
          <div className="upgrade-btn">
               UPGRADE
          </div>
          </div>
          <div className="upgrade-img-btn">
            <img src={SingleToBusiness} alt="#" className="upgrade-img"/>
          <div className="upgrade-btn">
               UPGRADE
          </div>
          </div>
          <div className="upgrade-img-btn">
            <img src={StudioToBusiness} alt="#" className="upgrade-img"/>
          <div className="upgrade-btn">
               UPGRADE
          </div>
          </div>
          <div className="upgrade-img-btn" style={{border:0}}>
            <img src={SempliceUpgrade} alt="#" className="upgrade-img"/>
          <div className="upgrade-btn">
               UPGRADE
          </div>
          </div>
        </div>:null}
      </div>

      <div className="horizontal-line">

      </div>
    </div>
  );
};

export default Purchase;
