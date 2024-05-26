import "./gallery.css";

const Card = (props) => {
  const { image, name, origin } = props;
  return (
    <div className="animal-card">
      <img src={image} alt="animal" width={150} height={150} />
      <p className="info">
        <span className="info-title">Name:</span>
        <span className="info-value">{name}</span>
      </p>
      <p className="info">
        <span className="info-title">Origin:</span>
        <span className="info-value">{origin}</span>
      </p>
    </div>
  );
};

export default Card;
