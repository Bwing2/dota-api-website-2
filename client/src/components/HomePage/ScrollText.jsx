import { useState } from "react";
import { useInView } from "react-intersection-observer";

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
            Track game stats, player stats, and more!
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
            <div className="column-header">First Column Header</div>
            <div className="description-1">
              Nice to meet you! Did you know that certain facts are interesting?
              I found this fact out that is very interesting.
            </div>
          </div>
          <div className="image-text column-2">
            <div className="column-header">Next Column Header</div>
            <div className="description-2">
              Test column 2. Did you know that certain facts are interesting? I
              found this fact out that is very interesting.
            </div>
          </div>
          <div className="image-text column-3">
            <div className="column-header">Last Column Header</div>
            <div className="description-3">
              Test column 3. Did you know that certain facts are interesting? I
              found this fact out that is very interesting.
            </div>
          </div>
        </div>
      </div>

      <SearchModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
