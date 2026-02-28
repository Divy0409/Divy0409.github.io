import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="container">
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
      >
        Projects
      </motion.h1>

      <div style={styles.grid}>
        {/* QuantCore Project */}
        <motion.div style={styles.card} whileHover={{ scale: 1.02 }} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <div style={styles.cardHeader}>
            <h2 style={styles.projectTitle}>QuantCore</h2>
            <span style={styles.date}>Jul 2025 - Present</span>
          </div>
          <ul style={styles.list}>
            <li>Developing a website for personalized stock portfolios using historical data, market sentiment, risk indicators, and confidence indices. [cite: 18, 19]</li>
            <li>Built a working chatbot to assist investors with fundamental finance-related queries. [cite: 20]</li>
            <li>Built stock-price prediction models using XGBoost, Neural Networks, and Stacking techniques, integrating both historical and sentiment features. [cite: 21]</li>
          </ul>
          {/* Make sure to update this href with your actual GitHub repo link! */}
          <a href="https://github.com/divy0409/QuantCore" target="_blank" rel="noreferrer" style={styles.link}>
            View Code →
          </a>
        </motion.div>

        {/* Vango Flex Project */}
        <motion.div style={styles.card} whileHover={{ scale: 1.02 }} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <div style={styles.cardHeader}>
            <h2 style={styles.projectTitle}>Vango Flex</h2>
            <span style={styles.date}>Jan 2025 - Apr 2025</span>
          </div>
          <ul style={styles.list}>
            <li>Built a full-stack platform for managing SQL-based image databases, hosted locally and on AWS RDS. [cite: 23, 24]</li>
            <li>Deployed the website using AWS EC2 and optimized PostgreSQL database architecture. [cite: 25]</li>
            <li>Designed version control workflows and collaborative practices using GitHub. [cite: 26]</li>
          </ul>
          {/* Make sure to update this href with your actual GitHub repo link! */}
        </motion.div>
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr", /* Changed to 1fr so the cards span full width to fit the bullets nicely */
    gap: "30px",
    marginTop: "20px",
    width: "100%" 
  },
  card: {
    background: "#1a1a1a",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(0, 245, 255, 0.1)",
    borderLeft: "4px solid #00f5ff",
    display: "flex",
    flexDirection: "column",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    flexWrap: "wrap",
    gap: "10px"
  },
  projectTitle: {
    margin: 0,
    color: "#00f5ff",
    fontSize: "1.5rem"
  },
  date: {
    color: "#888",
    fontStyle: "italic",
    fontSize: "0.95rem"
  },
  list: {
    color: "#cccccc",
    margin: "0 0 20px 0",
    paddingLeft: "20px",
    lineHeight: "1.6"
  },
  link: {
    color: "#00f5ff",
    textDecoration: "none",
    fontWeight: "bold",
    alignSelf: "flex-start",
    padding: "8px 16px",
    border: "1px solid #00f5ff",
    borderRadius: "5px",
    transition: "background 0.3s, color 0.3s"
  }
};

export default Projects;