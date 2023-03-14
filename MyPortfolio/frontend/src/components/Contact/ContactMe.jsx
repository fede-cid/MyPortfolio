import React, { useState } from "react";
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
    if (!formState.name || !formState.surname || !formState.email || !formState.role || !formState.description){
      setFormState({ ...formState, messageError: true });
    }
    if (formState.name && formState.surname && formState.email && formState.role && formState.description) {
        setFormState({ ...formState, messageSent: true , messageError: false });
        const message = `Hola, mi nombre es ${formState.name} ${formState.surname} y estoy interesado en contratarte para un servicio de IT como ${formState.role}. Mi E-mail ${formState.email} y necesito hacer ${formState.description}.`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/5491157291724?text=${encodedMessage}`;
        window.location.href = url;
      
    }
    };

  return (
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
    <p className={styles.message}>Please ! Complete all the required information</p>
    )}
    </form>
    );
    };
    
    export default ContactMe;