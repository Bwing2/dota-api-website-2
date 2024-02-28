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

  // useLocation is a custom hook that returns current location object, used to access location.state
  const location = useLocation();

  let steamId, longestMatch, shortestMatch;

  // Checks if location.state exists as they are undefined before if no state is passed in
  // Needs parentheses within if statement to be considered an object literal to destructure vs no parentheses being a block statement
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
      <MatchData
        profile={profile}
        matches={results}
        steamId={steamId}
        longestMatch={longestMatch}
        shortestMatch={shortestMatch}
        heroes={heroes}
      />
    </div>
  );
}
