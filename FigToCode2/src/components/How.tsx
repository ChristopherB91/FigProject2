import "../App.css";
import cloud from "../assets/Howimgs/Image1.svg";
import dev from "../assets/Howimgs/Image2.svg";
import edit from "../assets/Howimgs/Image3.svg";
import cloud_api from "../assets/Howimgs/Image4.svg";
import wrench from "../assets/Howimgs/WomenWrench.svg";

const list_items: {
  image: string;
  heading: string;
  text: string;
}[] = [
  {
    image: `${cloud}`,
    heading: "Shared Cloud Libraries",
    text: "Navigate to the Your work panel in the left sidebar. Select the library you want to share. Select the Share icon in the upper right to share the library.",
  },
  {
    image: `${dev}`,
    heading: "Free developer handoff, right inside",
    text: "Cloud Inspector makes it easy for developers to get the information they need to turn pixels into code — all in the browser and, most importantly, for free.",
  },
  {
    image: `${edit}`,
    heading: "Real-time collabo-rative editing",
    text: "Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.",
  },
  {
    image: `${cloud_api}`,
    heading: "Integrations with the Cloud API",
    text: "Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration.",
  },
];

function How() {
  return (
    <div className="how">
      <div className="subTitle" style={{ border: "Solid 1px #151515" }}>
        <p>How it works</p>
      </div>
      <h1>Building the best space for collaboration.</h1>
      <div>
        <ul>
          {list_items.map((item) => {
            return (
              <li style={{ listStyleImage: `url(${item.image})` }}>
                <h2>{item.heading}</h2>
                <h3>{item.text}</h3>
              </li>
            );
          })}
        </ul>
      </div>
      <img src={wrench} alt="Girl with wrenchz" />
    </div>
  );
}

export default How;
