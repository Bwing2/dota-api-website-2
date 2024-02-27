export default function MatchDataMap({ matchData, matchTitle, heroes }) {
  return (
    <div>
      <h2>Match ID: {matchTitle}</h2>
      <p>Duration: {matchData.duration} Minutes</p>
      {heroes[matchData.hero_id] && (
        <>
          <div>
            <p>Hero: {heroes[matchData.hero_id].localized_name}</p>
          </div>
          <div>
            <img
              src={`https://cdn.dota2.com${heroes[matchData.hero_id].img}`}
              alt={heroes[matchData.hero_id].localized_name}
            />
          </div>
        </>
      )}
      <p>
        KDA: {matchData.kills}/{matchData.deaths}/{matchData.assists}
      </p>
    </div>
  );
}
