import { useState } from "react";
import { useInView } from "react-intersection-observer";

import SearchModal from "./SearchModal";
import "./ScrollText.css";

export default function ScrollText() {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0 });

  const [showModal, setShowModal] = useState(false);

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
          <button className="modal-button" onClick={() => setShowModal(true)}>
            Search By Player
          </button>
        </div>
      </div>

      <div className="description-text-div">
        <div
          className={`fade-in-section ${inView2 ? "" : "fade-in"}`}
          ref={ref2}
        >
          <div className="image-text">
            <div>Hello!</div>
            <div>Nice to meet you!</div>
          </div>
        </div>
      </div>

      <SearchModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
