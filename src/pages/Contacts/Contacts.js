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

  // Vérification de la validité de l'email renseigné
  const isEmail = () => {
    // Récupération dans le dom du <label id="not-mail">Cet email n'est pas valide</label> 
    let mail = document.getElementById('not-mail');
    // Vérification par le regex des motifs rentrés dans l'input, matchent-ils ?
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // Affichage ou non de la non validité
    if(email.match(regex)) {
      mail.style.display = 'none';
      return true;
    } else {
      mail.style.display = 'block';
      return false;
    }
  }

  // Message en cas de non respect des champs obligatoires
  const uncompletedForm = () => {
    // Je stocke ma div contenant mon message
    let formMess = document.querySelector('.form-message');
    // J'agis sur ma div d'alerte
    formMess.innerHTML = 'Ces champs sont requis !';
    formMess.style.opacity = '1';
    formMess.style.background = '#f59803';
    // Je donne la class CSS aux champs 
    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  }

    // Message en cas de succès de l'envoi
    const completedForm = () => {
      // Je stocke ma div contenant mon message
      let formMess = document.querySelector('.form-message');
      // J'agis sur ma div d'alerte
      formMess.innerHTML = 'Le message a bien été envoyé !';
      formMess.style.opacity = '1';
      formMess.style.background = '#c0ce03';
    }

  // Communication des variables modifiées au template de emailjs au submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if(name && isEmail() && message) {
      sendFeedback("template_jkymd5p", {
        // Variables modifiées par le state
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      uncompletedForm();
    }
  };

  // Envois et mises à jour des states via le setState du useState
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      // Envoi de l'email qui prend en params le templateId et les variables modifiées
      .send("service_wr59ilc", templateId, variables)
      // Puis remise valeurs par défaut du state du formulaire via le setState
      .then((res) => {
        completedForm()
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
          <label id="not-mail">***Cet email n'est pas valide***</label>
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