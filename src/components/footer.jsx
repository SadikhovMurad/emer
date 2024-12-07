import React from "react";
import "../static files/Styles/Navbar and Footer/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <ul>
            <li>
              <a href="mailto:marknikulov11@gmail.com">
                <i className="fa-solid fa-envelope"></i> marknikulov11@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+994507715141">
                <i className="fa-solid fa-phone"></i> +994 50 771 51 41
              </a>
            </li>
          </ul>
          <div className="footer-buttons">
            <a href="#" className="footer-btn">
              Скачать EMER
            </a>
            <a href="#" className="footer-btn">
              Скачать EMER Driver
            </a>
          </div>
        </div>

        <div className="footer-center">
          <p>&copy; 2024 MMC. Bütün hüquqlar qorunur.</p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-right">
          <ul>
            <li>
              <a href="#">Şərtlər və Qaydalar</a>
            </li>
            <li>
              <a href="#">Gizlilik Siyasəti</a>
            </li>
            <li>
              <a href="#">Yardım və Dəstək</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;