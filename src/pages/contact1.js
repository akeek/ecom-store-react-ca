import React, { useState } from 'react';
import styles from "../modules/contactform.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from 'react-hook-form';
import "react-toastify/dist/ReactToastify.css";

function ContactForm1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const alert = () => {
    toast.success("Thank you for contacting us. You can expect a reply within 48 hours!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === 'name') {
      setName(value);
    }
    if (event.target.name === 'email') {
      setEmail(value);
    }
    if (event.target.name === 'subject') {
      setSubject(value);
    }
    if (event.target.name === 'message') {
      setMessage(value);
    }
  }

  const { register, handleSubmit } = useForm();
  
  function onSubmit(data) {
    console.log(data);
  }

    return (
        <div>
            <div className={styles.topContainer}>
                <h1 className={styles.H1}>Get in touch with us</h1>
            </div>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Name</label>
                        <input
                            {...register('name', {
                            required: true,
                            minLength: 3,
                            })}
                            value={name}
                            placeholder="Your name"
                            onChange={onTextInputChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            {...register("email", {
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                              })}
                            value={email}
                            placeholder="Your email"
                            onChange={onTextInputChange}
                        />
                        <label htmlFor="subject">Subject</label>
                        <input
                            {...register('subject', {
                                required: true,
                                minLength: 3,
                                })}
                            value={subject}
                            placeholder="Your subject"
                            onChange={onTextInputChange}
                        />
                        <label htmlFor="message">Message</label>
                        <input
                            {...register('message', {
                                required: true,
                                minLength: 3,
                                })}
                            value={message}
                            placeholder="Your message"
                            onChange={onTextInputChange}
                        />
                    <button 
                        className={styles.formBtn} 
                        onClick={() => {
                        alert();}}>
                        Submit
                    </button>
                    <ToastContainer autoClose={3000} />
                </form>
            </div>
        </div>
    );
}

export default ContactForm1;