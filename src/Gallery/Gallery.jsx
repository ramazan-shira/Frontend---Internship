import { useEffect, useState } from "react";
import { categories } from "../constants";
import axios from "axios";
import { dogs } from "./dogs";
import { cats } from "./cats";
import { birds } from "./birds";
import GalleryTab from "./GalleryTab";
import Cards from "./Cards";
import Filters from "./Filters";
import "./gallery.css";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const [animals, setAnimals] = useState(dogs);

  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState();

  const [filteredAnimals, setFilteredAnimals] = useState(animals);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await axios.get(
  //         `https://freetestapi.com/api/v1/${selectedCategory}`
  //       );
  //       setAnimals(response.data);
  //     };
  //     fetchData();
  //   }, [selectedCategory]);

  useEffect(() => {
    setFilteredAnimals(animals);
  }, [animals]);

  useEffect(() => {
    if (selectedCategory === "dogs") {
      setAnimals(dogs);
    } else if (selectedCategory === "cats") {
      setAnimals(cats);
    } else {
      setAnimals(birds);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (search === "") {
      setFilteredAnimals(dogs);
    } else {
      setFilteredAnimals(
        animals.filter((animal) =>
          animal.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, animals]);

  useEffect(() => {
    if (search === "" && selectedFilter === "select") {
      setFilteredAnimals(dogs);
    } else {
      setFilteredAnimals(
        animals.filter(
          (animal) =>
            animal.name.toLowerCase().includes(search.toLowerCase()) &&
            selectedFilter === animal.size
        )
      );
    }
  }, [search, selectedFilter, animals]);
  return (
    <div className="gallery-container">
      <GalleryTab
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Filters
        animals={animals}
        search={search}
        setSearch={setSearch}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Cards animals={animals} />
    </div>
  );
};

export default Gallery;
