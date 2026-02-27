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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        MS Data Science | Machine Learning | AI | Django Developer
        <a href="/resume.pdf" download>
        <button style={styles.button}>Download Resume</button>
        </a>
      </motion.p>
    </div>
  );
}
const styles = {
  button: {
    marginTop: "20px",
    padding: "12px 24px",
    background: "#00f5ff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};
export default Home;