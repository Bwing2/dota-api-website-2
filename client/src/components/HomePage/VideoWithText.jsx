import homeVideo from "../../assets/images/dota-test-video.mp4";
import heroImage from "../../assets/images/dota-hero-image.jpg";

export default function VideoWithText() {
  return (
    <div className="video-container">
      <div className="video-div">
        <video autoPlay muted playsInline loop className="home-vid">
          <source type="video/mp4" src={homeVideo} />
        </video>
        <img src={heroImage} alt="hero image" className="hero-image" />
      </div>
      <div className="video-text-div">
        <div className="home-title">Dota 2 Stats Tracker</div>
        <div className="home-description">
          Track game stats, player stats, and more!
        </div>
        <button className="modal-button">Search By Player</button>
      </div>
    </div>
  );
}
