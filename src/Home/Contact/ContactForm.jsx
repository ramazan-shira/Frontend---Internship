import "./contact.css";
const ContactForm = () => {
  return (
    <div className="contact-form">
      <input type="text" placeholder="Fullname" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Phone Number" />
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Message..." rows={5}></textarea>
      <button>Submit</button>
    </div>
  );
};

export default ContactForm;
