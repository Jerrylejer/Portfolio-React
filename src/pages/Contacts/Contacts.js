import React, { useState } from "react";
import Header from '../../components/Header/Header';
import './contacts.scss';

const Contact = () => {

  // States liées aux inputs
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Envoi du formulaire des données à emailjs (avec blocage du rafraichissement de la page)
  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("template_jkymd5p", {
      name,
      company,
      phone,
      email,
      message,
    });
  };

  // Mises à jour des states via le setState du useState
  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
        // Implémentation du messsage d'erreur dansle DOM
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

  return (
<div className="container">
    <Header /> 
    <form className="contact-form">
      <h2>Contactez-moi!</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="company"
          name="company"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Société"
          value={company}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Téléphone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail"></label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
        className="textarea"
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          value={message}
        />
      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
    </form>
</div>
    
  );
};

export default Contact;