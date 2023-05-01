import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import React, { useState, useEffect } from "react";
import "./Contact.css";
import "./Admin.css";
import { motion } from "framer-motion";

function Admin({ user, onLogout }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!user) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setName(storedUser.name);
        setEmail(storedUser.email);
      }
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  if (!user && (!name || !email)) {
    return null;
  }

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
        <h1>Admin</h1>
        <h2 className="title">
          Welcome To Admin Page, <br />
        </h2>
        <h4 className="name">
          {name} ({email})!
        </h4>
        <button className="btn" onClick={onLogout}>
          Logout
        </button>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Admin;
