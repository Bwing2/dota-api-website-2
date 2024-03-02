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
          <div>Search</div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Steam ID, complete Steam URL, or match ID"
              value={steamId || matchId}
              onChange={(event) => {
                if (!isNaN(event.target.value)) {
                  setMatchId(event.target.value);
                  setSteamId("");
                } else {
                  setSteamId(event.target.value);
                  setMatchId("");
                }
              }}
              onKeyDown={handleKeyDown}
              className="search-bar-input"
            />
            <button className="search-id-button" onClick={search}>
              Search
            </button>
          </div>
          {matchId.length === 10 && (
            <div className="filter-match">
              Filters don't work when searching by Match ID.
            </div>
          )}
          <div className="filter-div">
            <button
              className="search-id-button"
              onClick={() => setShowFilter(!showFilter)}
            >
              Filter Profile Specific Results
            </button>
            {showFilter && <FilterCheckboxes filters={filters} />}
          </div>
        </div>
      </div>
    )
  );
}
