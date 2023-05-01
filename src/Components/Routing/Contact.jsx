import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({ name, email });
    navigate("/admin");
  };

  return (
    <div>
      <Header />

      <motion.div
        className="co-container"
        initial={{ x: "7rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "spring",
        }}
      >
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="text-field">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="text-field">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
          <p className="text-field">
            <span style={{ color: "red" }}>*</span>Note: Registration is
            required to access the admin page. If you have already registered,
            you may proceed.
          </p>
        </form>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;
