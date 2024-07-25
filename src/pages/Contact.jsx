import React, { useEffect, useRef } from "react";
import Social from "./components/Social";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Footer from "./components/Footer";


// const serviceID = 'service_i1v44oi';
//     const templateID = 'template_seoz4o9';
//     const publicKey = 'XK2s-6eYVu_y2ZMHZ';

function Contact() {
  const form = useRef();
  useEffect(() => {
    document.title = "Contact | Shailendra";
  }, []);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i1v44oi",
        "template_seoz4o9",
        form.current,
        "XK2s-6eYVu_y2ZMHZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const variants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 40 },
  };

  if (formSubmitted) {
    return (
      <div className="message-sent">
        <p className="message">Message Sent. Thanks for Reaching Out!</p>
        <Social />
      </div>
    );
  }

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="title">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className="form">
        <input
          type="text"
          name="from_name"
          required
          placeholder="First Name *"
        />
        <input type="text" name="user_last_name" placeholder="Last Name" />
        <input type="email" name="user_email" placeholder="Email" />
        <input type="tel" name="user_phone" placeholder="Phone Number" />
        <textarea name="message" placeholder="Type your Message *" required />
        <input type="submit" value="Send" className="button" disabled={formSubmitted} />
      </form>
      <Footer />
      {/* <Social /> */}
    </motion.div>
  );
}
export default Contact;
