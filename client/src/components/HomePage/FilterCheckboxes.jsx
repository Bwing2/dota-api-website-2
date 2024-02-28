export default function FilterCheckboxes({ filters }) {
  return (
    <div className="filter-options">
      {filters.map((filter) => (
        <div key={filter.id}>
          <input
            type="checkbox"
            id={filter.id}
            name={filter.id}
            checked={filter.state}
            onChange={(event) => {
              filter.setState(event.target.checked);
              console.log(`${filter.name}:`, event.target.checked);
            }}
          />
          <label htmlFor={filter.id}>{filter.name}</label>
        </div>
      ))}
    </div>
  );
}
