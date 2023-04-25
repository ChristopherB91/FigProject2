import "../App.css";
import pig from "../assets/Pricingimg.svg";

function Price() {
  return (
    <div>
      <div className="subTitle" style={{ border: "Solid 1px #151515" }}>
        <p>Pricing</p>
      </div>
      <h1>Select a membership level the right price for you.</h1>
      <h3>
        Prices listed in USD. Taxes may apply. By using program you agree to our
        terms and policies.
      </h3>
      <img src={pig} alt="pig" />
    </div>
  );
}

export default Price;
