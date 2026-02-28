import { motion } from "framer-motion";

function About() {
  return (
    <div className="container">
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
      >
        About Me
      </motion.h1>
      
      {/* Education Section */}
      <motion.div style={styles.section} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <h2 style={styles.heading}>Education</h2>
        
        <div style={styles.card}>
          <h3 style={styles.title}>Michigan Technological University</h3>
          <p style={styles.text}>Master of Science, Data Science | Jan 2024 - Dec 2025</p>
          <p style={styles.text}>GPA: 3.9</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.title}>Gujarat Technological University</h3>
          <p style={styles.text}>Bachelor of Engineering, Information Technology | Aug 2019 - Apr 2023</p>
          <p style={styles.text}>GPA: 3.9/4</p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div style={styles.section} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
        <h2 style={styles.heading}>Technical Skills</h2>
        
        <div style={styles.card}>
          <p style={styles.text}>
            <strong style={{color: "white"}}>Programming:</strong> Python, Java, R, Django, Node.js, React.js, HTML, CSS, PostgreSQL, MySQL, Qdrant
          </p>
          <p style={styles.text}>
            <strong style={{color: "white"}}>Machine Learning & Data Science:</strong> Scikit-Learn, PyTorch, Pandas, NumPy, SciPy, Matplotlib, Seaborn, Transformers, Hugging Face, Ensemble Models, Stacking, Time-Series Forecasting
          </p>
          <p style={styles.text}>
            <strong style={{color: "white"}}>Data & Cloud Tools:</strong> GitHub, Hugging Face Hub, AWS EC2, AWS RDS
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const styles = {
  section: {
    width: "100%",
    marginBottom: "40px"
  },
  heading: {
    color: "#00f5ff",
    borderBottom: "1px solid #333",
    paddingBottom: "10px",
    marginBottom: "20px",
    fontSize: "1.5rem"
  },
  card: {
    background: "#1a1a1a",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "15px",
    borderLeft: "4px solid #00f5ff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"
  },
  title: {
    margin: "0 0 5px 0",
    fontSize: "1.2rem",
    color: "white"
  },
  text: {
    color: "#cccccc",
    margin: "8px 0",
    lineHeight: "1.5"
  }
};

export default About;