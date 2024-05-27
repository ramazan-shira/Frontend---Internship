import { useState } from "react";
import Card from "./Card";
import "./gallery.css";

const Cards = (props) => {
  const { animals } = props;

  const [selectedAnimal, setSelectedAnimal] = useState();

  return (
    <div className="animal-cards">
      {animals.map((animal) => (
        <Card
          key={animal.id}
          animals={animals}
          animal={animal}
          selectedAnimal={selectedAnimal}
          setSelectedAnimal={setSelectedAnimal}
        />
      ))}
    </div>
  );
};

export default Cards;
