import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialForm);
  const [buttonMessage, setButtonMessage] = useState("Send Message.");
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formState;

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    setTimeout(() => {
      setLoading(false);
      setButtonMessage("Success!!");
      setFormState(initialForm);
    }, 1000);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="services__top">
      <div className="title">Get In Touch!</div>
      <div className="sub">
        Got a question, proposal or project or want to work <br /> together on
        something? Feel free to reach out.
      </div>
      <form onSubmit={onSubmit}>
        <div className="input-row">
          <div className="side">
            <label htmlFor="name">Your Name</label>
            <input
              placeholder="What's Your Name?"
              name="name"
              id="name"
              type="text"
              required
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="side">
            <label htmlFor="email">Your Email</label>
            <input
              placeholder="What's Your Email?"
              name="email"
              id="email"
              type="email"
              required
              value={email}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="textarea">
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Hello, I think we need you to work on/collaborate this particular product... Reach out as soon as you can."
            required
            value={message}
            onChange={onChange}
          ></textarea>
        </div>
        <button type="submit">{loading ? "" : buttonMessage}</button>
      </form>
    </div>
  );
};

export default Contact;
