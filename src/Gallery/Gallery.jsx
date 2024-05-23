import { useEffect, useState } from "react";
import { categories } from "./constants";
import axios from "axios";
import { dogs } from "./dogs";
import { cats } from "./cats";
import { birds } from "./birds";
import GalleryTab from "./GalleryTab";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const [animals, setAnimals] = useState(dogs);

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
    if (selectedCategory === "dogs") {
      setAnimals(dogs);
    } else if (selectedCategory === "cats") {
      setAnimals(cats);
    } else {
      setAnimals(birds);
    }
  }, [selectedCategory]);

  return (
    <div>
      <GalleryTab
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ul>
        {animals.map((animal) => (
          <li>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
