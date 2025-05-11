import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-4">
            <h5 className="text-uppercase">🐾 PetStore</h5>
            <p>Your one-stop shop for all pet needs. Bringing joy to tails and smiles to faces!</p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>📍 Nagpur, Maharashtra</p>
            <p>📞 +91 9637828267 || 📞 +91 7588437369 || 📞 +91 7498448990 </p>
            <p>✉️ contact@lakadkarsarang.com</p>
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/ssarang_04dec/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        <hr className="bg-light" />

        <div className="text-center pb-3">
          &copy; {new Date().getFullYear()} PetStore. Made with ❤️ by Rutuja Gaikwad || Sarang Lakadkar || Shivam Birla.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
