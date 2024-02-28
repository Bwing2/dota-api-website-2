export default function MatchDataMap({
  specificMatchData,
  matchTitle,
  heroes,
}) {
  const radiant = specificMatchData.players?.slice(0, 5);
  const dire = specificMatchData.players?.slice(5);
  return (
    <div className="profile-div">
      <div className="match-title">{matchTitle}</div>
      <div className="match-id">Match ID: {specificMatchData.match_id}</div>
      <div className="match-duration">
        {Math.round(specificMatchData.duration / 60)} Minutes
      </div>
      <div>
        <div className="team-victory">
          {specificMatchData.radiant_win ? "Radiant Victory" : "Dire Victory"}
        </div>
        <div className="final-score">
          {specificMatchData.radiant_score} | {specificMatchData.dire_score}
        </div>
      </div>
      {specificMatchData && (
        <div>
          <div className="radiant-table">
            <div className="team-name">Radiant</div>
            <table className="radiant-players">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Hero</th>
                  <th>Kills</th>
                  <th>Deaths</th>
                  <th>Assists</th>
                  <th>Last Hits</th>
                  <th>Denies</th>
                  <th>Gold per Minute</th>
                  <th>Total Gold</th>
                  <th>Hero Damage</th>
                  <th>Total Healing</th>
                </tr>
              </thead>
              <tbody>
                {radiant?.map((player, playerIndex) => (
                  <tr key={playerIndex}>
                    <td>
                      {player.personaname
                        ? player.personaname
                        : '"Name not found"'}
                    </td>
                    <td>
                      <div className="hero-img-name">
                        <img
                          src={`https://cdn.dota2.com${
                            heroes[player.hero_id].img
                          }`}
                          alt={heroes[player.hero_id].localized_name}
                        />
                        {heroes[player.hero_id].localized_name}
                      </div>
                    </td>
                    <td>{player.kills}</td>
                    <td>{player.deaths}</td>
                    <td>{player.assists}</td>
                    <td>{player.last_hits}</td>
                    <td>{player.denies}</td>
                    <td>{player.gold_per_min}</td>
                    <td>{player.total_gold}</td>
                    <td>{player.hero_damage}</td>
                    <td>{player.hero_healing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="dire-table">
            <div className="team-name">Dire</div>
            <table className="dire-players">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Hero</th>
                  <th>Kills</th>
                  <th>Deaths</th>
                  <th>Assists</th>
                  <th>Last Hits</th>
                  <th>Denies</th>
                  <th>Gold per Minute</th>
                  <th>Total Gold</th>
                  <th>Hero Damage</th>
                  <th>Total Healing</th>
                </tr>
              </thead>
              <tbody>
                {dire?.map((player, playerIndex) => (
                  <tr key={playerIndex}>
                    <td>
                      {player.personaname
                        ? player.personaname
                        : '"Name not found"'}
                    </td>
                    <td>
                      <div className="hero-img-name">
                        <img
                          src={`https://cdn.dota2.com${
                            heroes[player.hero_id].img
                          }`}
                          alt={heroes[player.hero_id].localized_name}
                        />
                        {heroes[player.hero_id].localized_name}
                      </div>
                    </td>
                    <td>{player.kills}</td>
                    <td>{player.deaths}</td>
                    <td>{player.assists}</td>
                    <td>{player.last_hits}</td>
                    <td>{player.denies}</td>
                    <td>{player.gold_per_min}</td>
                    <td>{player.total_gold}</td>
                    <td>{player.hero_damage}</td>
                    <td>{player.hero_healing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
