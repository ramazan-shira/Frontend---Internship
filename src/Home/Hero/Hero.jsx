import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-container" id="hero">
      <div className="animals">
        <img
          src="https://i.pinimg.com/236x/bf/cd/50/bfcd50ff1e74a8c67afc3ec61f128002.jpg"
          alt="dog"
        />
        <p className="animal-title">Birds</p>
      </div>
      <div className="animals">
        <img
          src="https://i.pinimg.com/736x/95/63/15/956315eedf40a60820c4b453f6680166.jpg"
          alt="cats"
        />
        <p className="animal-title">Cats</p>
      </div>
      <div className="animals">
        <img
          src="https://ghk.h-cdn.co/assets/17/30/2048x3072/bernese-mountain-dog.jpg"
          alt="dog"
        />
        <p className="animal-title">Dogs</p>
      </div>
    </div>
  );
};

export default Hero;
