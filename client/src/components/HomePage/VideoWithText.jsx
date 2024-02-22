import ScrollText from "../HomePage/ScrollText";

import homeVideo from "../../assets/images/dota_site_intro.mp4";

export default function VideoWithText() {
  return (
    <div className="container">
      <div className="video-and-image-div">
        <video autoPlay muted playsInline loop className="home-vid">
          <source type="video/mp4" src={homeVideo} />
        </video>
        <div className="image-div" />
      </div>
      <ScrollText />
    </div>
  );
}
