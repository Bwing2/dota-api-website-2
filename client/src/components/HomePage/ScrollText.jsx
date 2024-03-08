import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

import SearchModal from "./SearchModal";
import "./ScrollText.css";

export default function ScrollText({ videoRef }) {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0 });

  const [showModal, setShowModal] = useState(false);

  const pauseButton = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="text-container">
      <div className="video-text-div">
        <div
          className={`fade-in-section ${inView1 ? "fade-in" : ""}`}
          ref={ref1}
        >
          <div className="home-title">Dota 2 Stats Tracker</div>
          <div className="home-description">
            <TypeAnimation
              sequence={[
                "Track player profiles",
                1000,
                "Track player matches",
                1000,
                "Track specific match ID's",
                1000,
              ]}
              wrapper="span"
              speed={50}
              // repeat={Infinity}
            />
          </div>
          <div className="button-div">
            <button
              className="modal-button"
              onClick={() => setShowModal(!showModal)}
            >
              Search Now!
            </button>
            <button className="video-button" onClick={pauseButton}>
              Play/Pause Video
            </button>
          </div>
        </div>
      </div>

      <div className="description-text-div">
        <div
          className={`fade-in-section column-container ${
            inView2 ? "fade-in" : ""
          }`}
          ref={ref2}
        >
          <div className="image-text column-1">
            <div className="column-header">Search Player Stats</div>
            <div className="description-1">
              Discover new ways to see match statistics on all of your friends.
            </div>
          </div>
          <div className="image-text column-2">
            <div className="column-header">Sign Up / Login Functionality</div>
            <div className="description-2">
              Create an account to save specific matches, and see more in depth
              stats!
            </div>
          </div>
          <div className="image-text column-3">
            <div className="column-header">Learn More on the About Page</div>
            <div className="description-3">
              Not sure what to do or how to get started? Head over to the{" "}
              <NavLink to="/about">About Page</NavLink> for common questions and
              a description on how the search process works.
            </div>
          </div>
        </div>
      </div>

      <SearchModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
