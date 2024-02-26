import { useState, useEffect } from "react";

export default function MatchData({
  matches,
  longestMatch,
  shortestMatch,
  heroes,
}) {
  // longestMatchData and shortestMatchData store the actual data to be displayed
  const [longestMatchData, setLongestMatchData] = useState({});
  const [shortestMatchData, setShortestMatchData] = useState({});

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

      longest.duration = Math.round(longest.duration / 60);
      shortest.duration = Math.round(shortest.duration / 60);

      console.log(longest);
      console.log(shortest);

      setLongestMatchData(longest);
      setShortestMatchData(shortest);
    }
  }, [matches]);

  return (
    <div>
      {longestMatch && longestMatchData && (
        <div>
          <h2>Longest Match</h2>
          <p>Match ID: {longestMatchData.match_id}</p>
          <p>Duration: {longestMatchData.duration} Minutes</p>
          {heroes[longestMatchData.hero_id] && (
            <>
              <div>
                <p>Hero: {heroes[longestMatchData.hero_id].localized_name}</p>
              </div>
              <div>
                <img
                  src={`https://cdn.dota2.com${
                    heroes[longestMatchData.hero_id].img
                  }`}
                  alt={heroes[longestMatchData.hero_id].localized_name}
                />
              </div>
            </>
          )}
          <p>
            KDA: {longestMatchData.kills}/{longestMatchData.deaths}/
            {longestMatchData.assists}
          </p>
        </div>
      )}
      {shortestMatch && shortestMatchData && (
        <div>
          <h2>Shortest Match</h2>
          <p>Match ID: {shortestMatchData.match_id}</p>
          <p>Duration: {shortestMatchData.duration} Minutes</p>
          {heroes[shortestMatchData.hero_id] && (
            <>
              <div>
                <p>Hero: {heroes[shortestMatchData.hero_id].localized_name}</p>
              </div>
              <div>
                <img
                  src={`https://cdn.dota2.com${
                    heroes[shortestMatchData.hero_id].img
                  }`}
                  alt={heroes[shortestMatchData.hero_id].localized_name}
                />
              </div>
            </>
          )}
          <p>
            KDA: {shortestMatchData.kills}/{shortestMatchData.deaths}/
            {shortestMatchData.assists}
          </p>
        </div>
      )}
    </div>
  );
}
