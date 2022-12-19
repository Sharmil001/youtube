import React from "react";
import { Link } from "react-router-dom";
import './home.css';

const Home = () => {
  return (
    <section className="contact">
      <div className="topic">Need a developer ?</div>
      <Link to="/contact">
        <div className="title">Let's Collaborate &#8594;</div>
      </Link>
    </section>
  );
};

export default Home;
