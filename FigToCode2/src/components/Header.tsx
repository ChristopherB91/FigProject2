import "../App.css";
import Logo from "../assets/HeaderImgs/logo.svg";
import HM from "../assets/HeaderImgs/HamburgerMenu.svg";
import Visa from "../assets/HeaderImgs/Visa.svg";
import MasterCard from "../assets/HeaderImgs/MasterCard.svg";
import PayPal from "../assets/HeaderImgs/Paypal.svg";
import Guy from "../assets/HeaderImgs/guyOnChair.svg";

function Header() {
  return (
    <div>
      <header>
        <img src={Logo} alt="Logo" />
        <img src={HM} alt="Hamburger menu" />
      </header>
      <h1>Always Track & Analyze Your Business Statistics To Succeed.</h1>
      <h3>
        A better way to manage your sales, team, clients & marketing — on a
        single platform. Powerful, affordable & easy.
      </h3>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button>Get Started</button>
      </form>
      <br />
      <div className="paymentIcon">
        <img src={Visa} alt="VisaImg" />
        <img src={MasterCard} alt="MasterCardImg" />
        <img src={PayPal} alt="PayPalImg" />
      </div>
      <br />
      <img src={Guy} alt="GuyOnChair" style={{ padding: "20px" }} />
    </div>
  );
}

export default Header;
