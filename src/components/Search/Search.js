import "./Search.css";

const Search = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search..."
        />
      </div>
    </nav>
  );
};

export default Search;