import "../App.css";
import girlWorld from "../assets/AboutUsimgs/WomenOnTheWorld.svg";

function About() {
  return (
    <div>
      <div className="subTitle" style={{ border: "Solid 1px #151515" }}>
        <p>About Us</p>
      </div>
      <h1>Faster, friendlier feedback loops make life easier.</h1>
      <h3>
        Add a Viewer to your team so they can see everything you share, or
        invite people to individual documents. It’s up to you. Stakeholders can
        check out designs in their web browser, test prototypes and leave
        feedback for free.
      </h3>
      <ul>
        <li>
          <h3>Shared Cloud Libraries, for a single source of truth</h3>
        </li>
        <li>
          <h3>Prototype previews for user testing and research</h3>
        </li>
        <li>
          <h3>Easy organization with projects</h3>
        </li>
        <li>
          <h3>Free developer handoff, right inside the browser</h3>
        </li>
        <li>
          <h3>Two-factor authentication and SSO</h3>
        </li>
      </ul>
      <img src={girlWorld} alt="GirlLayingONWorld" />
    </div>
  );
}

export default About;
