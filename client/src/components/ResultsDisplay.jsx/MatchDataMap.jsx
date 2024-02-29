export default function MatchDataMap({
  specificMatchData,
  matchTitle,
  heroes,
  items,
}) {
  const radiant = specificMatchData.players?.slice(0, 5);
  const dire = specificMatchData.players?.slice(5);
  const itemArray = [
    "item_0",
    "item_1",
    "item_2",
    "item_3",
    "item_4",
    "item_5",
  ];

  return (
    <div className="profile-div">
      <div className="match-title">{matchTitle}</div>
      <div className="match-id">Match ID: {specificMatchData.match_id}</div>
      <div className="match-duration">
        {Math.round(specificMatchData.duration / 60)} Minutes
      </div>
      <div className="results-victory-score">
        <div
          className={
            specificMatchData.radiant_win
              ? "radiant-score team-victory"
              : "dire-score team-victory"
          }
        >
          {specificMatchData.radiant_win ? "Radiant Victory" : "Dire Victory"}
        </div>
        <div className="final-score">
          <div className="radiant-score">{specificMatchData.radiant_score}</div>
          <div>|</div>
          <div className="dire-score">{specificMatchData.dire_score}</div>
        </div>
      </div>
      {specificMatchData && (
        <div>
          <div className="radiant-table">
            <div className="team-name">Radiant</div>
            <div className="radiant-table-container">
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
                    <th>Items</th>
                  </tr>
                </thead>
                <tbody>
                  {radiant?.map((player, playerIndex) => (
                    <tr key={playerIndex}>
                      <td className="name-column">
                        {player.personaname
                          ? player.personaname
                          : "Private Profile"}
                      </td>
                      <td className="hero-column">
                        <div className="hero-img-name">
                          {heroes[player.hero_id] && (
                            <img
                              src={`https://cdn.dota2.com${
                                heroes[player.hero_id].img
                              }`}
                              alt={heroes[player.hero_id].localized_name}
                            />
                          )}
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
                      <td>
                        <div className="item-img">
                          {itemArray?.map(
                            (itemId) =>
                              items[player[itemId]] && (
                                <img
                                  key={itemId}
                                  src={`https://cdn.dota2.com${
                                    items[player[itemId]].img
                                  }`}
                                  alt={items[player[itemId]].dname}
                                />
                              )
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="dire-table">
            <div className="team-name">Dire</div>
            <div className="dire-table-container">
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
                    <th>Items</th>
                  </tr>
                </thead>
                <tbody>
                  {dire?.map((player, playerIndex) => (
                    <tr key={playerIndex}>
                      <td className="name-column">
                        {player.personaname
                          ? player.personaname
                          : "Private Profile"}
                      </td>
                      <td className="hero-column">
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
                      <td>
                        <div className="item-img">
                          {itemArray.map(
                            (itemId) =>
                              items[player[itemId]] && (
                                <img
                                  key={itemId}
                                  src={`https://cdn.dota2.com${
                                    items[player[itemId]].img
                                  }`}
                                  alt={items[player[itemId]].dname}
                                />
                              )
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
