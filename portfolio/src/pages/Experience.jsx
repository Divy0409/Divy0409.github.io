function Experience() {
  return (
    <div className="container">
      <h1>Experience</h1>
      
      <div style={styles.experienceBlock}>
        <h2 style={{ color: "#00f5ff", margin: "0 0 10px 0" }}>Data Science Intern</h2>
        <p style={{ color: "#cccccc", margin: 0 }}>Backend Developer | AI Research Projects</p>
      </div>
    </div>
  );
}

const styles = {
  experienceBlock: {
    background: "#1a1a1a",
    padding: "25px",
    borderRadius: "12px",
    width: "100%",            /* Ensures it fills the container width */
    boxSizing: "border-box",  /* Keeps padding from breaking the width */
    marginTop: "20px",
    borderLeft: "4px solid #00f5ff" /* Adds a nice cyan accent line on the left */
  }
};

export default Experience;