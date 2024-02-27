export default function MatchDataMap({ matchData, matchTitle, heroes }) {
  return (
    <div className="profile-div">
      <h2>{matchTitle}</h2>
      <h3>{matchData.match_id}</h3>
      <h4>{matchData.duration} Minutes</h4>
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
                <>
                  <img
                    src={`https://cdn.dota2.com${
                      heroes[matchData.hero_id].img
                    }`}
                    alt={heroes[matchData.hero_id].localized_name}
                  />
                  {heroes[matchData.hero_id].localized_name}
                </>
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
