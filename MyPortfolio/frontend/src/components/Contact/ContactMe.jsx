import React, { useState } from "react";
import TechSkills from "../TechSkills/TechSkills";
import styles from "./ContactMe.module.css";

const ContactMe = () => {
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    email: "",
    role: "",
    description: "",
    messageSent: false,
    messageError: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formState.name ||
      !formState.surname ||
      !formState.email ||
      !formState.role ||
      !formState.description
    ) {
      setFormState({ ...formState, messageError: true });
    }
    if (
      formState.name &&
      formState.surname &&
      formState.email &&
      formState.role &&
      formState.description
    ) {
      setFormState({ ...formState, messageSent: true, messageError: false });
      const message = `Hola, mi nombre es ${formState.name} ${formState.surname} y estoy interesado en contratarte para un servicio de IT como ${formState.role}. Mi E-mail ${formState.email} y necesito hacer ${formState.description}.`;
      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/5491157291724?text=${encodedMessage}`;
      window.location.href = url;
    }
  };

  return (
    <>
    <div className={styles.container}>
      <h2>ABOUT ME</h2>
      <br></br>
      <p className={styles.text}>As a Full Stack Developer with a specialization in Front End, I'm passionate about software development and technology. I love tackling challenging projects that allow me to learn new things and continuously improve my skills. I'm a creative, curious, and self-taught individual who's always seeking new ways to solve problems and find innovative solutions. With solid experience and a passion for my work, I'm ready to bring effective, high-quality solutions to any project I take on.</p>
      <TechSkills/>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">
            Nombre:
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="surname">
            Apellido:
          </label>
          <input
            className={styles.input}
            type="text"
            id="surname"
            name="surname"
            value={formState.surname}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="role">
            Rol:
          </label>
          <select
            className={styles.select}
            id="role"
            name="role"
            onChange={handleInputChange}
          >
            <option value="">Seleccione un rol</option>
            <option value="Full-Stack">Full Stack</option>
            <option value="Front-End">Front End</option>
            <option value="Back-End">Back End</option>
          </select>
        </div>{" "}
        <label className={styles.label} htmlFor="description">
          Descripción:
        </label>
        <div className={styles.formGroup}>
          <textarea
            className={styles.textarea}
            id="description"
            name="description"
            value={formState.description}
            onChange={handleInputChange}
          />
        </div>
        <button className={styles.button} type="submit">
          Enviar
        </button>
        {formState.messageSent && (
          <p className={styles.message}>Sent! Thanks for contacting me.</p>
        )}
        {formState.messageError && (
          <p className={styles.message}>
            Please ! Complete all the required information
          </p>
        )}
      </form>
      <h2>Personal Info</h2>
        <div>
          <a href="mailto:fede.cid.96@gmail.com">
            <img
              className={styles.img}
              src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"
              alt="Email"
            />
          </a>
          <a href="https://www.linkedin.com/in/federico-cid-519421188/" target='_blank'>
            <img
              className={styles.img}
              src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn"
            />
          </a>
        </div></div>
    </>
  );
};

export default ContactMe;
