export default function MatchDataMap({ matchData, matchTitle, heroes }) {
  return (
    <div className="profile-div">
      <div className="match-title">{matchTitle}</div>
      <div className="match-id">Match ID: {matchData.match_id}</div>
      <div className="match-duration">{matchData.duration} Minutes</div>
      <table>
        <thead>
          <tr>
            <th>Hero</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th>Assists</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {heroes[matchData.hero_id] && (
                <div className="hero-img-name">
                  <img
                    src={`https://cdn.dota2.com${
                      heroes[matchData.hero_id].img
                    }`}
                    alt={heroes[matchData.hero_id].localized_name}
                  />
                  {heroes[matchData.hero_id].localized_name}
                </div>
              )}
            </td>
            <td>{matchData.kills}</td>
            <td>{matchData.deaths}</td>
            <td>{matchData.assists}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
