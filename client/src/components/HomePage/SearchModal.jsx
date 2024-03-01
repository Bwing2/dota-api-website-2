import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FilterCheckboxes from "./FilterCheckboxes";

export default function SearchModal({ showModal, setShowModal }) {
  const [steamId, setSteamId] = useState("");
  const [matchId, setMatchId] = useState("");

  const [showFilter, setShowFilter] = useState(false);
  const [recentMatch, setRecentMatch] = useState(false);
  const [longestMatch, setLongestMatch] = useState(false);
  const [shortestMatch, setShortestMatch] = useState(false);

  const filters = [
    {
      id: "recentMatch",
      name: "Most Recent Match",
      state: recentMatch,
      setState: setRecentMatch,
    },
    {
      id: "longestMatch",
      name: "Longest Match",
      state: longestMatch,
      setState: setLongestMatch,
    },
    {
      id: "shortestMatch",
      name: "Shortest Match",
      state: shortestMatch,
      setState: setShortestMatch,
    },
  ];

  // useNavigate hook allows for navigation to different parts of application
  const navigate = useNavigate();

  const search = () => {
    // takes 2 args, path which is required, and optional state object
    navigate("/results", {
      state: { steamId, matchId, recentMatch, longestMatch, shortestMatch },
    });
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
              value={steamId || matchId}
              onChange={(event) => {
                event.target.value.length === 10
                  ? setMatchId(event.target.value)
                  : setSteamId(event.target.value);
              }}
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
            {showFilter && <FilterCheckboxes filters={filters} />}
          </div>
        </div>
      </div>
    )
  );
}
