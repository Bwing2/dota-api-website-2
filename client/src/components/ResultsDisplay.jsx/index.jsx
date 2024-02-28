import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  playerProfileSearch,
  playerIdSearch,
  fetchHeroes,
} from "../../utils/API";

import MatchData from "./MatchData";

export default function ResultsDisplay() {
  const [profile, setProfile] = useState([]);
  const [results, setResults] = useState([]);
  const [heroes, setHeroes] = useState([]);

  const location = useLocation();

  let steamId, longestMatch, shortestMatch;

  // Checks if location.state exists as they are undefined before if no state is passed in
  if (location.state) {
    ({ steamId, longestMatch, shortestMatch } = location.state);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (steamId) {
          const user = await playerProfileSearch(steamId);
          setProfile(user);

          if (longestMatch || shortestMatch) {
            const data = await playerIdSearch(steamId);
            setResults(data);
            const heroesData = await fetchHeroes();
            setHeroes(heroesData);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [steamId, longestMatch, shortestMatch]);

  if (!steamId) {
    return <h1>Please enter a Steam ID in the search bar.</h1>;
  }

  return (
    <div className="results-container">
      {/* <h1>Search Results</h1> */}
      <MatchData
        profile={profile}
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
