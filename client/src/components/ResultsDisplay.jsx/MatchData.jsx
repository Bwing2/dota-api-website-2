import { useState, useEffect } from "react";

import ProfileData from "./ProfileData";
import MatchDataMap from "./MatchDataMap";

export default function MatchData({
  profile,
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

  if (!profile || !profile.profile) {
    return;
  }

  return (
    <div>
      {profile && <ProfileData profile={profile} />}
      {longestMatch && longestMatchData && (
        <MatchDataMap
          matchData={longestMatchData}
          matchTitle="Longest Match"
          heroes={heroes}
        />
      )}
      {shortestMatch && shortestMatchData && (
        <MatchDataMap
          matchData={shortestMatchData}
          matchTitle="Shortest Match"
          heroes={heroes}
        />
      )}
    </div>
  );
}
