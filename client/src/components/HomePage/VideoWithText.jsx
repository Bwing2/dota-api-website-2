import { useRef } from "react";
import ScrollText from "../HomePage/ScrollText";
import homeVideo from "../../assets/images/dota_site_intro.mp4";

export default function VideoWithText() {
  const videoRef = useRef();

  return (
    <div className="container">
      <div className="video-and-image-div">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="home-vid"
        >
          <source type="video/mp4" src={homeVideo} />
        </video>
        <div className="image-div"></div>
      </div>

      <ScrollText videoRef={videoRef} />
    </div>
  );
}
