import { useState } from "react";
import "./contact.css";
const ContactForm = () => {
  const fullNameLengthRegex = /^.{3,}\s.{3,}$/;
  const fullNameCharacterRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
  const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regPhone = /^\d{3}\s\d{7}$/;
  const regSubject = /^.{5,}$/;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [valid, setValid] = useState(false);

  const handleSubmit = () => {
    if (name === "") {
      setNameError("Name cannot be empty!");
      setValid(false);
    } else if (!fullNameCharacterRegex.test(name)) {
      setNameError("First name and last name must contain only letters!");
      setValid(false);
    } else if (!fullNameLengthRegex.test(name)) {
      setNameError("First name and last name must have at least 3 characters!");
      setValid(false);
    } else {
      setValid(true);
      setNameError("");
    }

    if (email === "") {
      setEmailError("Email cannot be empty!");
      setValid(false);
    } else if (!regEmail.test(email)) {
      setEmailError("Invalid email address!");
      setValid(false);
    } else {
      setValid(true);
      setEmailError("");
    }

    if (phone === "") {
      setPhoneError("Phone number cannot be empty!");
      setValid(false);
    } else if (!regPhone.test(phone)) {
      setPhoneError("Invalid phone number! Correct format: XXX XXXXXXX!");
      setValid(false);
    } else {
      setValid(true);
      setPhoneError("");
    }

    if (subject === "") {
      setSubjectError("Subject cannot be empty!");
      setValid(false);
    } else if (!regSubject.test(subject)) {
      setSubjectError("Subject should have at least 5 characters!");
      setValid(false);
    } else {
      setValid(true);
      setSubjectError("");
    }

    if (message === "") {
      setMessageError("Message cannot be empty!");
      setValid(false);
    } else if (message.length <= 10) {
      setMessageError("Message should have at least 10 characters!");
      setValid(false);
    } else {
      setMessageError("");
      setValid(true);
    }

    if (valid) {
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div className="contact-form">
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className="error">{nameError}</span>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <span className="error">{emailError}</span>

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <span className="error">{phoneError}</span>

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <span className="error">{subjectError}</span>

      <textarea
        placeholder="Message..."
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <span className="error">{messageError}</span>

      <button onClick={handleSubmit}>Submit</button>

      {valid && <p className="success">Message sent!</p>}
    </div>
  );
};

export default ContactForm;
