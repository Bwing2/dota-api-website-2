import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { playerIdSearch, fetchHeroes } from "../../utils/API";

import MatchData from "./MatchData";

export default function ResultsDisplay() {
  const [results, setResults] = useState([]);
  const [heroes, setHeroes] = useState([]);

  const location = useLocation();
  // Check if location.state exists before trying to access steamId
  const steamId = location.state ? location.state.steamId : null;

  // longestMatch and shortestMatch control state and if it is displayed
  const longestMatch = location.state ? location.state.longestMatch : false;
  const shortestMatch = location.state ? location.state.shortestMatch : false;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await playerIdSearch(steamId);
        setResults(data);
        const heroesData = await fetchHeroes();
        setHeroes(heroesData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [steamId]);

  if (!steamId) {
    return <h1>Please enter a Steam ID in the search bar.</h1>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      <MatchData
        matches={results}
        steamId={steamId}
        longestMatch={longestMatch}
        shortestMatch={shortestMatch}
        heroes={heroes}
      />
      {/* {results &&
        results.map((result) => (
          <div key={result.match_id}>
            <h2>{result.hero_id}</h2>
          </div>
        ))} */}
    </div>
  );
}
