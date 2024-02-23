import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { playerIdSearch } from "../../utils/API";

export default function ResultsDisplay() {
  const [results, setResults] = useState([]);

  const location = useLocation();
  // Check if location.state exists before trying to access steamId
  const steamId = location.state ? location.state.steamId : null;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await playerIdSearch(steamId);
        setResults(data);
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
      {results &&
        results.map((result) => (
          <div key={result.match_id}>
            <h2>{result.hero_id}</h2>
          </div>
        ))}
    </div>
  );
}
