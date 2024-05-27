import { useState } from "react";
import { birds } from "./birds";
import { cats } from "./cats";
import { dogs } from "./dogs";
import "./gallery.css";
const Filters = (props) => {
  const { setSearch, search, animals, selectedFilter, setSelectedFilter } =
    props;

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectFilter = (e) => {
    setSelectedFilter(e.target.value);
  };

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
        {animals === dogs && (
          <select onChange={handleSelectFilter}>
            <option value="select">Select size</option>
            <option value="tiny">Tiny</option>
            <option value="smal">Small</option>
            <option value="sm">Small to Medium</option>
            <option value="standard">Toy, Miniature, Standard</option>
            <option value="medium">Medium</option>
            <option value="ml">Medium to Large</option>
            <option value="large">Large</option>
            <option value="giant">Giant</option>
          </select>
        )}
        {animals === birds && (
          <select onChange={handleSelectFilter}>
            <option value="select">Select weight</option>
            <option value="0-2">0 - 2 kg</option>
            <option value="2-4">2 - 4 kg</option>
            <option value="4-6">4 - 6 kg</option>
            <option value="6-8">6 - 8 kg</option>
            <option value="8-10">8 - 10 kg</option>
            <option value=">10">&gt;10 kg</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default Filters;
