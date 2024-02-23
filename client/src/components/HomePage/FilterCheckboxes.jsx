export default function FilterCheckboxes({
  longestGame,
  setLongestGame,
  shortestGame,
  setShortestGame,
}) {
  return (
    <div className="filter-options">
      <div>
        <input
          type="checkbox"
          id="longestGame"
          name="longestGame"
          checked={longestGame}
          onChange={(event) => {
            setLongestGame(event.target.checked);
            console.log("Longest Game:", event.target.checked);
          }}
        />
        <label htmlFor="longestGame">Longest Game</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="shortestGame"
          name="shortestGame"
          checked={shortestGame}
          onChange={(event) => {
            setShortestGame(event.target.checked);
            console.log("Shortest Game:", event.target.checked);
          }}
        />
        <label htmlFor="shortestGame">Shortest Game</label>
      </div>
    </div>
  );
}
