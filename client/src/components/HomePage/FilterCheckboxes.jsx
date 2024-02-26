export default function FilterCheckboxes({
  longestMatch,
  setLongestMatch,
  shortestMatch,
  setShortestMatch,
}) {
  return (
    <div className="filter-options">
      <div>
        <input
          type="checkbox"
          id="longestMatch"
          name="longestMatch"
          checked={longestMatch}
          onChange={(event) => {
            setLongestMatch(event.target.checked);
            console.log("Longest Match:", event.target.checked);
          }}
        />
        <label htmlFor="longestMatch">Longest Match</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="shortestMatch"
          name="shortestMatch"
          checked={shortestMatch}
          onChange={(event) => {
            setShortestMatch(event.target.checked);
            console.log("Shortest Match:", event.target.checked);
          }}
        />
        <label htmlFor="shortestMatch">Shortest Match</label>
      </div>
    </div>
  );
}
