import { useState } from "react";
import Card from "./Card";
import "./gallery.css";

const Cards = (props) => {
  const { animals, selectedCategory } = props;

  const [modalProp, setModalProp] = useState();

  return (
    <div className="animal-cards">
      {animals.map((animal) => (
        <Card
          key={animal.id}
          animals={animals}
          animal={animal}
          modalProp={modalProp}
          setModalProp={setModalProp}
          selectedCategory={selectedCategory}
        />
      ))}
    </div>
  );
};

export default Cards;
