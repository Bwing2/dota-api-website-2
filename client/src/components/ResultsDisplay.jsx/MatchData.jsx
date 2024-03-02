import { useState, useEffect } from "react";
import { fetchMatch } from "../../utils/API";

import ProfileData from "./ProfileData";
import MatchDataMap from "./MatchDataMap";

export default function MatchData({
  profile,
  matches,
  searched,
  recentMatch,
  longestMatch,
  shortestMatch,
  heroes,
  items,
  matchId,
}) {
  // Specific matches use different API call for more indepth information on a match
  const [specificRecentMatch, setSpecificRecentMatch] = useState([]);
  const [specificLongestMatch, setSpecificLongestMatch] = useState([]);
  const [specificShortestMatch, setSpecificShortestMatch] = useState([]);

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

    // console.log("searched:", searched);
    // console.log("heroes:", heroes);
    // console.log("items:", items);

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

        const recentMatch = matches[0];

        console.log(longest);
        console.log(shortest);
        console.log(longest.match_id);
        console.log(recentMatch);

        if (recentMatch) {
          const recentMatchData = await fetchMatchData(recentMatch.match_id);
          setSpecificRecentMatch(recentMatchData);
        }

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
  }, [matches, searched, recentMatch, longestMatch, shortestMatch]);

  if (!profile && !profile.profile && !searched) {
    return;
  }

  return (
    <>
      {/* Uses both matchData and specificMatchData from different API calls. */}
      {profile && profile.profile && <ProfileData profile={profile} />}
      {searched && searched.match_id && (
        <MatchDataMap
          specificMatchData={searched}
          matchTitle="Searched Match"
          heroes={heroes}
          items={items}
        />
      )}
      {!matchId && (
        <>
          {recentMatch && heroes && (
            <MatchDataMap
              specificMatchData={specificRecentMatch}
              matchTitle="Most Recent Match"
              heroes={heroes}
              items={items}
            />
          )}
          {longestMatch && heroes && (
            <MatchDataMap
              specificMatchData={specificLongestMatch}
              matchTitle="Longest Match"
              heroes={heroes}
              items={items}
            />
          )}
          {shortestMatch && heroes && (
            <MatchDataMap
              specificMatchData={specificShortestMatch}
              matchTitle="Shortest Match"
              heroes={heroes}
              items={items}
            />
          )}
        </>
      )}
    </>
  );
}
