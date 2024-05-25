import Card from "./Card";
import "./gallery.css";

const Cards = (props) => {
  const { animals } = props;

  return (
    <div className="animal-cards">
      {animals.map((animal) => (
        <Card image={animal.image} name={animal.name} origin={animal.origin} />
      ))}
    </div>
  );
};

export default Cards;
