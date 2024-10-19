/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./style.scss";


function Contact() {
  const form = useRef();
  const [reponse, setReponse] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_v5m2ah4', 'template_m0ed47f', form.current, {
        publicKey: "RSJ_UqQZ7z4A84CnA",

      })
      .then(
        () => {

          setReponse(" Votre message et bien parti");
          e.target.reset()
        },
        () => {
          setReponse(" erreur ou problème envoi");

        },
      );
  };


  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <form name="contact" ref={form} onSubmit={sendEmail}>

        <label htmlFor="name">Votre nom et prénom: </label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Votre email: </label>
        <input type="text" name="email" id="email" />

        <label htmlFor="phone">Votre téléphone: </label>
        <input type="text" name="phone" id="phone" />

        <label htmlFor="message">Message: </label>
        <textarea type="text" name="message" id="message" />

        <button type="submit" >Envoyé</button>
        <p className='reponse'>
          {reponse}
        </p>
      </form>
    </section>
  )
};

export default Contact;
