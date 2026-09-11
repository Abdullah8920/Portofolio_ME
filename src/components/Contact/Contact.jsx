import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Contact.module.css";
import axios from "axios";

const Contact = () => {

  const [formData, SetFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(false)

  const handlechange = (e) => {
    SetFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });
    try {
      let apiUrl = import.meta.env.VITE_API_URL || "/api/contact";
      const res = await axios({
        url: apiUrl,
        method: "POST",
        data: formData
      })
      console.log("Api checking", res);
      if (res.data.success) {
        setStatus({ loading: false, success: true, });
        SetFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ loading: false, success: false, message: res.data.message || "Something went wrong" });
      }

    } catch (err) {
      console.log("Error IN APi Handling", err)
      setStatus({
        loading: false,
        success: false,
      })
    }

  };

  return (
    <section id="contact" className={styles.contact} aria-label="Contact">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.heading}>Let&apos;s Work Together</h2>
          <p className={styles.subtitle}>
            Have a project in mind? Feel free to reach out.
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handlechange}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handlechange}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handlechange}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn} disabled={status.loading}>
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {status.message && (
              <p style={{ color: status.success ? "limegreen" : "crimson", marginTop: "8px" }}>
                {status.message}
              </p>
            )}
          </motion.form>

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.infoItem}>
              <Mail size={20} aria-hidden="true" />
              <div>
                <span className={styles.infoLabel}>Email</span>
                <a href="mailto:abdullahansari7463@gmail.com">abdullahansari7463@gmail.com</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Phone size={20} aria-hidden="true" />
              <div>
                <span className={styles.infoLabel}>Phone</span>
                <span>+92 370 2123431</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <MapPin size={20} aria-hidden="true" />
              <div>
                <span className={styles.infoLabel}>Location</span>
                <span>Pakistan</span>
              </div>
            </div>

            <div className={styles.socialWrap}>
              <p className={styles.socialLabel}>Follow me</p>
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Abdullah. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;