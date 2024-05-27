import "./about.css";

const About = () => {
  return (
    <div className="about-container section" id="about">
      <div className="about-img">
        <img
          src="https://www.shutterstock.com/image-photo/group-pets-together-outdoors-summer-600nw-2130577739.jpg"
          alt="about"
        />
      </div>
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to Animal Haven, your go-to online resource for everything
          related to dogs, cats, and birds. Our catalog offers detailed profiles
          and expert advice to help you find and care for the perfect pet. We
          are dedicated to promoting responsible pet ownership and connecting
          you with adoption resources and a community of animal lovers.
        </p>
      </div>
    </div>
  );
};

export default About;
