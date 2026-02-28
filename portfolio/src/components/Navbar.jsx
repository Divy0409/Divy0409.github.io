import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navHeader}>
      {/* Added an inner container to align with Home content */}
      <div style={styles.navContainer}>
        <h2 style={{ margin: 0 }}>Divy Patel</h2>
        <div>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/projects" style={styles.link}>Projects</Link>
          <Link to="/experience" style={styles.link}>Experience</Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navHeader: {
    background: "#111",
    color: "white",
    display: "flex",
    justifyContent: "center", /* Centers the inner container */
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1000px", /* Matches the max-width of your Home container */
    padding: "20px",
  },
  link: {
    margin: "0 15px",
    color: "white",
    textDecoration: "none",
    fontSize: "1.1rem"
  }
};

export default Navbar;