import { motion } from "framer-motion";

function Home() {
  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Divy 👋
      </motion.h1>

      <motion.p
        style={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        MS Data Science | Machine Learning | AI | Django Developer
      </motion.p>

      {/* Moved the button OUTSIDE the <p> tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a href="/resume.pdf" download>
          <button style={styles.button}>Download Resume</button>
        </a>
      </motion.div>
    </div>
  );
}

const styles = {
  subtitle: {
    color: "#cccccc",
    fontSize: "1.2rem",
    marginBottom: "30px", /* Adds space between text and button */
  },
  button: {
    padding: "12px 24px",
    background: "#00f5ff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#000",
  }
};

export default Home;