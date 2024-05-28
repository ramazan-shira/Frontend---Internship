import { useState } from "react";
import "./gallery.css";
import Modal from "./Modal";

const Card = (props) => {
  const { animals, animal, selectedCategory, setModalProp } = props;

  const [toggleModal, setToggleModal] = useState(false);

  const openModal = (id) => {
    animals.map((animal) => {
      if (animal.id === id) {
        setModalProp(animal);
        setToggleModal(!toggleModal);
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
          <span className="info-value">
            {selectedCategory === "birds"
              ? animal.place_of_found
              : animal.origin}
          </span>
        </p>
      </div>
      {toggleModal && (
        <Modal
          animal={animal}
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
          selectedCategory={selectedCategory}
        />
      )}
    </>
  );
};

export default Card;
