import { useEffect, useState } from "react";
import axios from "axios";
import GalleryTab from "./GalleryTab";
import Cards from "./Cards";
import Filters from "./Filters";
import "./gallery.css";
import { useSearchParams } from "react-router-dom";

const Gallery = () => {
  const [searchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category")
  );

  const [animals, setAnimals] = useState();

  const [search, setSearch] = useState("");

  const [selectedFilter, setSelectedFilter] = useState("select");

  const [filteredAnimals, setFilteredAnimals] = useState(animals);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSearch("");
    setSelectedFilter("select");
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://freetestapi.com/api/v1/${selectedCategory}?search=${search}`
      );
      setIsLoading(false);
      setAnimals(response.data);
      setFilteredAnimals(response.data);
    };
    fetchData();
  }, [selectedCategory]);

  const updateFilteredAnimals = () => {
    if (selectedFilter === "select") {
      setFilteredAnimals(animals);
    } else {
      if (selectedCategory === "dogs") {
        setFilteredAnimals(
          animals.filter((animal) => animal.size === selectedFilter)
        );
      } else if (selectedCategory === "birds") {
        if (selectedFilter === ">10") {
          setFilteredAnimals(
            animals.filter((animal) => animal.weight_kg >= 10)
          );
          return;
        }
        const ranges = selectedFilter.split("-");
        const min = ranges[0];
        const max = ranges[1];
        setFilteredAnimals(
          animals.filter(
            (animal) => min <= animal.weight_kg && animal.weight_kg <= max
          )
        );
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://freetestapi.com/api/v1/${selectedCategory}?search=${search}`
      );
      setIsLoading(false);
      setAnimals(response.data);
      if (selectedFilter !== "select") {
        updateFilteredAnimals();
      } else {
        setFilteredAnimals(response.data);
      }
    };
    fetchData();
  }, [search]);

  useEffect(() => {
    if (animals) {
      updateFilteredAnimals();
    }
  }, [selectedFilter]);
  return (
    <div className="gallery-container">
      <GalleryTab
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Filters
        search={search}
        setSearch={setSearch}
        setSelectedFilter={setSelectedFilter}
        selectedCategory={selectedCategory}
      />
      {isLoading ? (
        <h1>Loading</h1>
      ) : !filteredAnimals.length ? (
        <h1>No data found!!</h1>
      ) : (
        <Cards animals={filteredAnimals} selectedCategory={selectedCategory} />
      )}
    </div>
  );
};

export default Gallery;
