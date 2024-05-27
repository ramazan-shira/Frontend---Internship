import { birds } from "./birds";
import { cats } from "./cats";
import { dogs } from "./dogs";
import "./gallery.css";
const Modal = (props) => {
  const { animals, clicked, animal } = props;

  return (
    <div className={clicked ? "modal-window show" : "modal-window"}>
      <div className="modal-content">
        <span className="close">&times;</span>
        {animals === dogs && (
          <div className="animal-info">
            <div className="info">
              <h1>{animal.name}</h1>
              <p>
                <span className="info-title">Breed Group:</span>
                {animal.breed_group}
              </p>
              <p>
                <span className="info-title">Size:</span> {animal.size}
              </p>
              <p>
                <span className="info-title">Lifespan:</span> {animal.lifespan}
              </p>
              <p>
                <span className="info-title">Origin: </span>
                {animal.origin}
              </p>
              <p>
                <span className="info-title">Temperament:</span>
                {animal.temperament}
              </p>
              <p>
                <span className="info-title">Colors:</span>
              </p>
              <ul>
                {animal.colors.map((color) => (
                  <li key={color}>{color}</li>
                ))}
              </ul>
              <p>
                <span className="info-title">Description:</span>
                {animal.description}
              </p>
            </div>
            <img
              src={animal.image}
              alt={animal.name}
              width={200}
              height={200}
            />
          </div>
        )}
        {animals === cats && (
          <div className="animal-info">
            <div className="info">
              <h1>{animal.name}</h1>
              <p>
                <span className="info-title">Origin:</span> {animal.origin}
              </p>
              <p>
                <span className="info-title">Temperament:</span>
                {animal.temperament}
              </p>
              <p>
                <span className="info-title">Colors:</span>
              </p>
              <ul>
                {animal.colors.map((color) => (
                  <li key={color}>{color}</li>
                ))}
              </ul>

              <p>
                <span className="info-title">Description:</span>
                {animal.description}
              </p>
            </div>
            <img
              src={animal.image}
              alt={animal.name}
              width={200}
              height={200}
            />
          </div>
        )}
        {animals === birds && (
          <div className="animal-info">
            <div className="info">
              <h1>{animal.name}</h1>
              <p>
                <span className="info-title">Species:</span> {animal.species}
              </p>
              <p>
                <span className="info-title">Family:</span> {animal.family}
              </p>
              <p>
                <span className="info-title">Habitat:</span> {animal.habitat}
              </p>
              <p>
                <span className="info-title">Place of found:</span>
                {animal.place_of_found}
              </p>
              <p>
                <span className="info-title">Diet:</span> {animal.diet}
              </p>
              <p>
                <span className="info-title">Description:</span>
                {animal.description}
              </p>
              <p>
                <span className="info-title">Wing:</span> {animal.wingspan_cm}{" "}
                cm
              </p>
              <p>
                <span className="info-title">Weight:</span> {animal.weight_kg}{" "}
                kg
              </p>
            </div>
            <img
              src={animal.image}
              alt={animal.name}
              width={200}
              height={200}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
