import ContactForm from "./ContactForm";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <div className="location">
          <i class="fa-solid fa-location-dot"></i>
          <span>Tirana, Albania</span>
        </div>
        <div className="email">
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:info@animals.com" className="d-flex contactme">
            <span className="contactme email">info@animals.com</span>
          </a>
        </div>
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <a href="tel://11234567890" className="d-flex contactme">
            <span className="contactme">+355(68)-123-4567</span>
          </a>
        </div>
        <div className="social-media">
          <div className="social-media-icon">
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>

          <div className="social-media-icon">
            <i class="fa-brands fa-instagram"></i>
            <a href="#"></a>
          </div>
          <div className="social-media-icon">
            <a href="#">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
