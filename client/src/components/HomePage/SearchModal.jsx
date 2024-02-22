import { useState } from "react";

export default function SearchModal({ showModal, setShowModal }) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    showModal && (
      <div className="search-modal">
        <button className="close-button" onClick={() => setShowModal(false)}>
          X
        </button>
        <div className="modal-content">
          <div>Enter Steam ID Here</div>
          <div>
            <input type="text" placeholder="Enter Steam ID Here" />
            <button className="search-id-button">Search</button>
          </div>
          <div className="filter-div">
            <button
              className="search-id-button"
              onClick={() => setShowFilter(!showFilter)}
            >
              Filter Results
            </button>
            {showFilter && (
              <>
                <div className="filter-options">
                  <div>
                    <input
                      type="checkbox"
                      id="longestGame"
                      name="longestGame"
                    />
                    <label htmlFor="longestGame">Longest Game</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="shortestGame"
                      name="shortestGame"
                    />
                    <label htmlFor="shortestGame">Shortest Game</label>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
}
