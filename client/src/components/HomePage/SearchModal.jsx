import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { playerIdSearch } from "../../utils/API";

import FilterCheckboxes from "./FilterCheckboxes";

export default function SearchModal({ showModal, setShowModal }) {
  const [showFilter, setShowFilter] = useState(false);
  const [steamId, setSteamId] = useState("");
  const [longestGame, setLongestGame] = useState(false);
  const [shortestGame, setShortestGame] = useState(false);

  // useNavigate hook allows for navigation to different parts of application
  const navigate = useNavigate();

  const search = async () => {
    const data = await playerIdSearch(steamId);
    // takes 2 args, path which is required, and optional state object
    navigate("/results", { state: { steamId, longestGame, shortestGame } });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  return (
    showModal && (
      <div className="search-modal">
        <button className="close-button" onClick={() => setShowModal(false)}>
          X
        </button>
        <div className="modal-content">
          <div>Steam ID Search</div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Steam ID or complete URL"
              value={steamId}
              onChange={(event) => setSteamId(event.target.value)}
              onKeyDown={handleKeyDown}
              className="search-bar-input"
            />
            <button className="search-id-button" onClick={search}>
              Search
            </button>
          </div>
          <div className="filter-div">
            <button
              className="search-id-button"
              onClick={() => setShowFilter(!showFilter)}
            >
              Filter Results
            </button>
            {showFilter && (
              <FilterCheckboxes
                longestGame={longestGame}
                setLongestGame={setLongestGame}
                shortestGame={shortestGame}
                setShortestGame={setShortestGame}
              />
            )}
          </div>
        </div>
      </div>
    )
  );
}
