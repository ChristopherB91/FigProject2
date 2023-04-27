import "../App.css";
import Wlogo from "../assets/FooterImgs/whiteLogo.svg";
import fbook from "../assets/FooterImgs/facebookIcon.svg";
import twitter from "../assets/FooterImgs/twitterIcon.svg";
import gPlus from "../assets/FooterImgs/googlePlusIcon.svg";
import linkedin from "../assets/FooterImgs/linkedinIcon.svg";
import youtube from "../assets/FooterImgs/youtubeIcon.svg";

function Footer() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={{ marginLeft: "16px", marginRight: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={Wlogo} alt="white logo" />
          <div>
            <h3
              style={{
                color: "white",
                fontFamily: "NeueMachinaUltra",
                textAlign: "end",
              }}
            >
              Email
            </h3>
            <p style={{ color: "white", fontFamily: "NeueMachinareg" }}>
              info@the18.design
            </p>
          </div>
        </div>
        <br />
        <div
          className="socialLinks"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <img src={fbook} alt="facebook" className="Icon" />
          <img src={twitter} alt="twitter" className="Icon" />
          <img src={gPlus} alt="googlePlus" className="Icon" />
          <img src={linkedin} alt="linkedin" className="Icon" />
          <img src={youtube} alt="youtube" className="Icon" />
        </div>
        <br />
        <div>
          <nav>
            <p className="nLink">About us</p>
            <p className="nLink">How it works</p>
            <p className="nLink">Pricing</p>
            <p className="nLink">FAQs</p>
          </nav>
          <br />
          <div className="credits">
            <p className="nLink">Lead generation</p>
            <p className="nLink">Customer engagement</p>
            <p className="nLink">Customer support</p>
            <p className="nLink">Help Center Articles</p>
            <p className="nLink">Outbound Messages</p>
          </div>
        </div>
        <br />
        <h2
          style={{
            fontFamily: "NeueMachinaUltra",
            fontSize: "23px",
            color: "white",
          }}
        >
          Want to receive our awesome stories?
        </h2>
        <form action="required">
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              backgroundColor: "Black",
              color: "White",
              border: "solid 1px white",
            }}
          />
          <button style={{ backgroundColor: "white", color: "#151515" }}>
            Subscribe
          </button>
        </form>
        <br />
        <i className="fa fa-copyright" aria-hidden="true">
          © 18 Design, all rights reserved.
        </i>
      </div>
    </div>
  );
}

export default Footer;
