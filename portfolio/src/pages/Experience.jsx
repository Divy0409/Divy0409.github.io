import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="container">
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
      >
        Professional Experience
      </motion.h1>

      <div style={styles.timeline}>
        {/* MTU Role */}
        <motion.div style={styles.card} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 style={styles.company}>Michigan Technological University</h2>
          <p style={styles.role}>Research Assistant | Mar 2024 - Present</p>
          <ul style={styles.list}>
            <li>Developed a user-friendly UI using Django and core logic for scraping and formatting data to create datasets, train, test, and evaluate Large Language Models (LLMs) using the Transformers library.</li>
            <li>Built a comprehensive finance website for planning stock market investments.</li>
            <li>Implemented user-friendly configuration options to allow data retrieval from various financial APIs and added forecasting features including Relative Strength Index, Moving Averages, and Oscillator Functions.</li>
          </ul>
        </motion.div>

        {/* Tops Technologies Role 1 */}
        <motion.div style={styles.card} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 style={styles.company}>Tops Technologies</h2>
          <p style={styles.role}>Data Analysis Intern | Mar 2023 - Mar 2024 | Remote</p>
          <ul style={styles.list}>
            <li>Contributed to the development of a data visualization platform to analyze quarterly profit and sales figures for a manufacturing business which led to a 5% reduction in stockouts and a 12% improvement in asset management.</li>
            <li>Gained hands-on experience with Excel, Power BI, machine learning, regression analysis, and data visualization through an intensive training program.</li>
          </ul>
        </motion.div>

        {/* Ek Software Role */}
        <motion.div style={styles.card} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
          <h2 style={styles.company}>Ek Software</h2>
          <p style={styles.role}>Backend Developer Intern | Mar 2023 - Oct 2023 | Ahmedabad, India</p>
          <ul style={styles.list}>
            <li>Developed a Python (Django) backend for a web portal to manage patients and physicians for pharmacies.</li>
            <li>Played a key role in the development of the company's first advanced chat system, significantly improving their technology stack.</li>
            <li>Designed and built a high-performance multitenant PostgreSQL database, improving website speed by 25% and reducing development time.</li>
          </ul>
        </motion.div>

        {/* Tops Technologies Role 2 */}
        <motion.div style={styles.card} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
          <h2 style={styles.company}>Tops Technologies</h2>
          <p style={styles.role}>Java Developer Intern | Jun 2022 - Dec 2022 | Hybrid</p>
          <ul style={styles.list}>
            <li>Developed platforms including a student admission website and a Charity Food/Funding system using advanced Java frameworks (Spring Java and Hibernate).</li>
            <li>Utilizing advanced Java frameworks resulted in a 20% reduction in projected development time, while also ensuring consistency in coding standards.</li>
            <li>Built and managed efficient MySQL databases for each website, ensuring smooth storage and retrieval of data.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

const styles = {
  timeline: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  card: {
    background: "#1a1a1a",
    padding: "25px",
    borderRadius: "12px",
    borderLeft: "4px solid #00f5ff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    width: "100%",
    boxSizing: "border-box"
  },
  company: {
    color: "#00f5ff",
    margin: "0 0 5px 0",
    fontSize: "1.4rem"
  },
  role: {
    color: "white",
    fontStyle: "italic",
    margin: "0 0 15px 0",
    fontSize: "1rem"
  },
  list: {
    color: "#cccccc",
    margin: 0,
    paddingLeft: "20px",
    lineHeight: "1.6"
  }
};

export default Experience;