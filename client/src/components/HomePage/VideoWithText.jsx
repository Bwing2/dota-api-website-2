import ScrollText from "../HomePage/ScrollText";

import homeVideo from "../../assets/images/dota_site_intro.mp4";
import heroImage from "../../assets/images/dota-hero-image.jpg";

export default function VideoWithText() {
  return (
    <div className="container">
      <div className="video-and-image-div">
        <video autoPlay muted playsInline loop className="home-vid">
          <source type="video/mp4" src={homeVideo} />
        </video>
        <div className="image-div">
          <img src={heroImage} alt="hero image" className="hero-image" />
        </div>
      </div>
      <ScrollText />
    </div>
  );
}
