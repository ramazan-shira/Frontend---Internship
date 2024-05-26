import { categories } from "../../constants";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-container section" id="hero">
      {categories.map((category) => (
        <div className="animals" key={category.id}>
          <img src={category.image} alt={category.title} />
          <p className="animal-title">{category.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Hero;
