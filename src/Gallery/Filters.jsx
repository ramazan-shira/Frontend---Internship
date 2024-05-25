import "./gallery.css";
const Filters = (props) => {
  const { setSearch, search } = props;

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Filters;
