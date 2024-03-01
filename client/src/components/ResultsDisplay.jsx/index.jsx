import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import {
  playerProfileSearch,
  playerIdSearch,
  fetchHeroes,
  fetchItems,
  fetchMatch,
} from "../../utils/API";

import MatchData from "./MatchData";

export default function ResultsDisplay() {
  const [profile, setProfile] = useState([]);
  const [results, setResults] = useState([]);
  const [specificMatch, setSpecificMatch] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  // useLocation is a custom hook that returns current location object, used to access location.state
  const location = useLocation();

  let steamId, matchId, recentMatch, longestMatch, shortestMatch;

  // Checks if location.state exists as they are undefined before if no state is passed in
  // Needs parentheses within if statement to be considered an object literal to destructure vs no parentheses being a block statement
  if (location.state) {
    ({ steamId, matchId, recentMatch, longestMatch, shortestMatch } =
      location.state);
  }

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        if (steamId) {
          const user = await playerProfileSearch(steamId);
          setProfile(user);

          if (recentMatch || longestMatch || shortestMatch) {
            const data = await playerIdSearch(steamId);
            setResults(data);
            const heroesData = await fetchHeroes();
            setHeroes(heroesData);
            const itemsData = await fetchItems();
            setItems(itemsData);
          }
        } else if (matchId) {
          const match = await fetchMatch(matchId);
          setSpecificMatch(match);
          const heroesData = await fetchHeroes();
          setHeroes(heroesData);
          const itemsData = await fetchItems();
          setItems(itemsData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [steamId, matchId, recentMatch, longestMatch, shortestMatch]);

  if (!steamId && !matchId) {
    return <h1>Please enter a Steam ID or Match ID in the search bar.</h1>;
  }

  return (
    <div className="results-container">
      {loading ? (
        <div className="loader-container">
          <div className="loading-text">Loading...</div>
          <ClipLoader color="red" loading={loading} size={100} />
        </div>
      ) : (
        <MatchData
          profile={profile}
          matches={results}
          steamId={steamId}
          searched={specificMatch}
          matchId={matchId}
          recentMatch={recentMatch}
          longestMatch={longestMatch}
          shortestMatch={shortestMatch}
          heroes={heroes}
          items={items}
        />
      )}
    </div>
  );
}
