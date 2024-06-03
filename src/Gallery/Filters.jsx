import "./gallery.css";
const Filters = (props) => {
  const { setSearch, search, selectedCategory, setSelectedFilter } = props;

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectFilter = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filterDogs = (
    <select onChange={handleSelectFilter}>
      <option value="select">Select size</option>
      <option value="Tiny">Tiny</option>
      <option value="Small">Small</option>
      <option value="Small to Medium">Small to Medium</option>
      <option value="Toy, Miniature, Standard">Toy, Miniature, Standard</option>
      <option value="Medium">Medium</option>
      <option value="Medium to Large">Medium to Large</option>
      <option value="Large">Large</option>
      <option value="Giant">Giant</option>
    </select>
  );

  const filterBirds = (
    <select onChange={handleSelectFilter}>
      <option value="select">Select weight</option>
      <option value="0-2">0 - 2 kg</option>
      <option value="2-4">2 - 4 kg</option>
      <option value="4-6">4 - 6 kg</option>
      <option value="6-8">6 - 8 kg</option>
      <option value="8-10">8 - 10 kg</option>
      <option value=">10">&gt;10 kg</option>
    </select>
  );

  return (
    <div className="filters">
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="filter">
        {selectedCategory === "dogs" && filterDogs}
        {selectedCategory === "birds" && filterBirds}
      </div>
    </div>
  );
};

export default Filters;
