import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import "../styles/Footer.css"; // Ensure correct import

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Blue Altair. All Rights Reserved.</p>
      <div className="social-icons">
        <FaLinkedin />
        <FaTwitter />
        <FaGithub />
      </div>
    </footer>
  );
};

export default Footer;
