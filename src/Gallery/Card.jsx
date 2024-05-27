import { useState } from "react";
import "./gallery.css";
import Modal from "./Modal";

const Card = (props) => {
  const { animals, animal, selectedAnimal, setSelectedAnimal } = props;

  const [clicked, setClicked] = useState(false);

  const openModal = (id) => {
    animals.map((animal) => {
      if (animal.id === id) {
        setSelectedAnimal(animal);
        setClicked(!clicked);
      }
      return animal;
    });
  };

  return (
    <>
      <div className="animal-card" onClick={() => openModal(animal.id)}>
        <img src={animal.image} alt="animal" width={150} height={150} />
        <p className="info">
          <span className="info-title">Name:</span>
          <span className="info-value">{animal.name}</span>
        </p>
        <p className="info">
          <span className="info-title">Origin:</span>
          <span className="info-value">{animal.origin}</span>
        </p>
        <Modal animals={animals} animal={animal} clicked={clicked} />
      </div>
    </>
  );
};

export default Card;
