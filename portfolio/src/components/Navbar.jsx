import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Divy Patel</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/experience" style={styles.link}>Experience</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "#111",
    color: "white"
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;