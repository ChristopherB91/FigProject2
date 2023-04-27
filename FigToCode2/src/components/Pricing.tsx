import "../App.css";
import pig from "../assets/Pricingimg.svg";

const pricing: {
  amount: string;
  subtext: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  class: string;
  benefit4?: string;
  benefit5?: string;
}[] = [
  {
    amount: "$49 /mo",
    subtext: "A pay-once license, just for you",
    benefit1: "The Mac app yours to keep",
    benefit2: "Beautiful White_level",
    benefit3: "One year of saving to Cloud",
    benefit4: undefined,
    class: "tier1",
  },
  {
    amount: "$99 /mo",
    subtext: "Pro account, just for you",
    benefit1: "The Mac app yours to keep",
    benefit2: "One year of Mac updates",
    benefit3: "One year of saving to Cl",
    benefit4: "A personal Cl workspace",
    benefit5: "All tools, just for you",
    class: "tier2",
  },
  {
    amount: "$299 /mo",
    subtext: "A subscription for the whole team",
    benefit1: "Access to the Mac for all",
    benefit2: "A shared Cloud workspace",
    benefit3: "Free Cl access for unlimited time",
    benefit4: "Easy team management",
    benefit5: "No license key required",
    class: "tier3",
  },
];

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
      {pricing.map((item, index) => {
        if (typeof item.benefit4 == "string") {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {item.amount}
              <br />
              {item.subtext}
              <ul className={item.class}>
                <li>{item.benefit1}</li>
                <li>{item.benefit2}</li>
                <li>{item.benefit3}</li>
                <li>{item?.benefit4}</li>
                <li>{item?.benefit5}</li>
              </ul>
            </div>
          );
        } else {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {item.amount}
              <br />
              {item.subtext}
              <ul className={item.class} key={index}>
                <li>{item.benefit1}</li>
                <li>{item.benefit2}</li>
                <li>{item.benefit3}</li>
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Price;
