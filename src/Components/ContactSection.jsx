import { useState } from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import "../Styles/ContactSection.css";

function ContactSection() {

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    // simulate API success
    setShowSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="con-contact-section">

      <div className="con-contact-container">

        {/* LEFT SIDE */}
        <div className="con-contact-info">

          <h2>
            Let’s <span>Get In Touch</span> With Us
          </h2>

          <div className="social-icons">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>

          <div className="con-info-block">
            <h4>Head Office</h4>
            <p>
              Office #312 Makateb Building, Port Saeed,<br />
              Airport Road, Dubai, UAE
            </p>
          </div>

          <div className="con-info-block">
            <h4>Phone</h4>
            <p>+971 56 256 6887</p>
          </div>

          <div className="con-info-block">
            <h4>Email</h4>
            <p>info@perch-international.com</p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="con-contact-form">

          <form onSubmit={handleSubmit}>

            <div className="con-input-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="con-input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="con-input-group">
              <label>Message</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit" className="con-contact-btn">
              Contact Us Now
            </button>

          </form>

        </div>

      </div>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="popup-box success"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
            >

              <FiCheckCircle className="popup-icon" />

              <h3>Thank You!</h3>

              <p>
                Your information has been received.
                We'll contact you soon.
              </p>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ERROR POPUP */}
      <AnimatePresence>
        {showError && (
          <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="popup-box error-popup"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
            >

              <h3>Something went wrong</h3>

              <p>Please fill all fields correctly.</p>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default ContactSection;