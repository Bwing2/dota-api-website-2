import { useState, useEffect } from "react";
import { fetchMatch } from "../../utils/API";

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
  const [longestFromAllMatches, setLongestFromAllMatches] = useState({});
  const [shortestFromAllMatches, setShortestFromAllMatches] = useState({});

  // Specific matches use different API call for more indepth information on a match
  const [specificLongestMatch, setSpecificLongestMatch] = useState({});
  const [specificShortestMatch, setSpecificShortestMatch] = useState({});

  useEffect(() => {
    // Reuse this for longest or shortest API call.
    const fetchMatchData = async (match_id) => {
      try {
        const data = await fetchMatch(match_id);
        return data;
      } catch (error) {
        console.error(error);
      }
    };

    const fetchMatches = async () => {
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
        console.log(longest.match_id);

        // Sets the state of these equal to longest and shortest array from all matches
        setLongestFromAllMatches(longest);
        setShortestFromAllMatches(shortest);

        // If longest and shortest match are truthy, fetches match by its id.
        if (longestMatch) {
          const longestMatchData = await fetchMatchData(longest.match_id);
          setSpecificLongestMatch(longestMatchData);
        }
        if (shortestMatch) {
          const shortestMatchData = await fetchMatchData(shortest.match_id);
          setSpecificShortestMatch(shortestMatchData);
        }
      }
    };

    fetchMatches();
  }, [matches, longestMatch, shortestMatch]);

  if (!profile || !profile.profile) {
    return null;
  }

  return (
    <>
      {/* Uses both matchData and specificMatchData from different API calls. */}
      {profile && <ProfileData profile={profile} />}
      {longestMatch && longestFromAllMatches && (
        <MatchDataMap
          matchData={longestFromAllMatches}
          specificLongestMatch={specificLongestMatch}
          matchTitle="Longest Match"
          heroes={heroes}
        />
      )}
      {shortestMatch && shortestFromAllMatches && (
        <MatchDataMap
          matchData={shortestFromAllMatches}
          specificShortestMatch={specificShortestMatch}
          specifc
          matchTitle="Shortest Match"
          heroes={heroes}
        />
      )}
    </>
  );
}
