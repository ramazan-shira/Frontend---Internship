import { useNavigate } from "react-router-dom";
import { categories } from "../../constants";
import "./hero.css";
const Hero = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/gallery?category=${category}`);
  };
  return (
    <div className="hero-container section" id="home">
      {categories.map((category) => (
        <div
          className="animals"
          key={category.id}
          onClick={() => handleClick(category.id)}
        >
          <img src={category.image} alt={category.title} />
          <p className="animal-title">{category.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Hero;
