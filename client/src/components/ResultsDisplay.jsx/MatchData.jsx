import { useState, useEffect } from "react";

export default function MatchData({ matches, longestGame, shortestGame }) {
  // longestMatchData and shortestMatchData store the actual data to be displayed
  const [longestMatchData, setLongestMatchData] = useState(null);
  const [shortestMatchData, setShortestMatchData] = useState(null);

  useEffect(() => {
    if (matches.length > 0) {
      let longest = matches[0];
      let shortest = matches[0];

      for (let i = 0; i < matches.length; i++) {
        if (matches[i].duration > longest.duration) {
          longest = matches[i];
        }
        if (matches[i].duration < shortest.duration) {
          shortest = matches[i];
        }
      }

      console.log(longest);
      console.log(shortest);

      setLongestMatchData(longest);
      setShortestMatchData(shortest);
    }
  }, [matches]);

  return (
    <div>
      {longestGame && longestMatchData && (
        <div>
          <h2>Longest Match</h2>
          <p>Duration: {longestMatchData.duration}</p>
        </div>
      )}
      {shortestGame && shortestMatchData && (
        <div>
          <h2>Shortest Match</h2>
          <p>Duration: {shortestMatchData.duration}</p>
        </div>
      )}
    </div>
  );
}
