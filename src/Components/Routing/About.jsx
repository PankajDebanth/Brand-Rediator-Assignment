import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const About = () => {
  const text = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    padding: "1.5rem",
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
        <h1>About</h1>
        <p style={text}>
          Welcome to this web app! This project was created as an assignment for
          Brand Radiator to showcase my skills and abilities as a Front End
          Developer. If you want to access the admin page, you'll first need to
          register yourself on the contact page. Simply enter your name and
          email, and then you'll be able to access the dashboard where you can
          view the names and emails that have been entered. <br /> <br /> It's
          important to note that this website is solely for the purpose of this
          assignment, and any data entered will only be used for demonstration
          purposes. <br />
          <br />{" "}
          <b>
            Thank you for visiting, If you encounter any issues while using this
            web app, please let me know and I'll do my best to fix them. Your
            feedback is important to me, and I appreciate your understanding as
            I work to ensure that everything is functioning properly. Thank you.
            I look forward to hearing from you!
          </b>
        </p>
      </motion.div>

      <Footer />
    </div>
  );
};

export default About;
