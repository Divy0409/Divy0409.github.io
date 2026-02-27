import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>

      <div style={styles.grid}>
        <motion.div style={styles.card} whileHover={{ scale: 1.05 }}>
          <h2>LLM Fine-Tuning</h2>
          <p>Fine-tuned GPT-2 on domain-specific dataset.</p>
          <a href="https://github.com/yourusername/project1" target="_blank">
            View Code →
          </a>
        </motion.div>

        <motion.div style={styles.card} whileHover={{ scale: 1.05 }}>
          <h2>Django ML Deployment</h2>
          <p>Deployed ML API using AWS EC2 + RDS.</p>
          <a href="https://github.com/yourusername/project2" target="_blank">
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
    gap: "20px",
    marginTop: "40px"
  },
  card: {
    background: "#1a1a1a",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)"
  }
};

export default Projects;