import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>

      <div style={styles.grid}>
        <motion.div style={styles.card} whileHover={{ scale: 1.05 }}>
          <h2 style={{ margin: "0 0 10px 0" }}>LLM Fine-Tuning</h2>
          <p style={styles.text}>Fine-tuned GPT-2 on domain-specific dataset.</p>
          <a href="https://github.com/yourusername/project1" target="_blank" rel="noreferrer" style={styles.link}>
            View Code →
          </a>
        </motion.div>

        <motion.div style={styles.card} whileHover={{ scale: 1.05 }}>
          <h2 style={{ margin: "0 0 10px 0" }}>Django ML Deployment</h2>
          <p style={styles.text}>Deployed ML API using AWS EC2 + RDS.</p>
          <a href="https://github.com/yourusername/project2" target="_blank" rel="noreferrer" style={styles.link}>
            View Code →
          </a>
        </motion.div>
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    marginTop: "20px",
    width: "100%" /* Forces the grid to span the whole container */
  },
  card: {
    background: "#1a1a1a",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(0, 245, 255, 0.1)", /* Softened the glow slightly */
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between" /* Pushes the link to the bottom if text varies in length */
  },
  text: {
    color: "#cccccc",
    marginBottom: "20px"
  },
  link: {
    color: "#00f5ff",
    textDecoration: "none",
    fontWeight: "bold",
  }
};

export default Projects;