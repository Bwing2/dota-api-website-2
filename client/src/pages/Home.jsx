import homeVideo from "../assets/images/dota-test-video.mp4";

export default function Home() {
  return (
    <div className="video-container">
      <div className="header">
        <h1>Test Home</h1>
      </div>
      <div className="video-div">
        <video autoPlay muted playsInline loop className="home-vid">
          <source type="video/mp4" src={homeVideo} />
        </video>
      </div>
      <div className="video-text">
        <h2>Hello There!</h2>
      </div>
    </div>
  );
}
