import React from "react";
import styles from "../modules/contactform.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactForm = yup.object().shape({
  name: yup.string().min(3).required("Enter your full name"),
  email: yup.string().required("Valid email is required"),
  subject: yup.string().min(3).required("Your subject must be longer then 3 characters"),
  message: yup.string().min(3).required("Your message must be longer then 3 characters"),
});

function ContactForm() {
  const alert = () => {
    toast.success("Thank you for contacting us. You can expect a reply within 48 hours!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const initialValues = { name: "", email: "", subject: "", message: "" };

  return (
    <Formik
      validationSchema={contactForm}
      onSubmit={console.log}
      initialValues={initialValues}
    >
      {(formik) => {
        const { handleSubmit, values } = formik;
        return (
          <div>
            <div className={styles.topContainer}>
              <h1 className={styles.H1}>Get in touch with us</h1>
            </div>
            <div>
              <Form onSubmit={handleSubmit} className={styles.form}>
                <div>
                  <label className={styles.left}>Name</label>
                  <Field
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    defaultValue={values.name}
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="error"
                  />
                </div>

                <div>
                  <label className={styles.left}>Email</label>
                  <Field
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    defaultValue={values.email}
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error"
                  />
                </div>
                <div>
                  <label className={styles.left}>Subject</label>
                  <Field
                    className={styles.input}
                    type="text"
                    name="subject"
                    placeholder="Enter your subject"
                    defaultValue={values.subject}
                  />
                  <ErrorMessage
                    name="subject"
                    component="span"
                    className="error"
                  />
                </div>
                <div>
                  <label className={styles.left}>Message</label>
                  <Field
                    className={styles.message}
                    type="text"
                    name="message"
                    placeholder="Write your message"
                    defaultValue={values.message}
                  />
                  <ErrorMessage
                    name="message"
                    component="span"
                    className="error"
                  />
                </div>

                <button
                  type="submit"
                  className={styles.formBtn}
                  onClick={() => {
                    alert();
                  }}
                >
                  Submit form
                </button>
                <ToastContainer autoClose={3000} />
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
