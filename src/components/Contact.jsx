import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("⚠️ Please fill in all fields before sending.");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_togl7dd", // Replace with your EmailJS Service ID
        "template_jzq6prf", // Replace with your EmailJS Template ID
        templateParams,
        "iv2DFzSlf02Zkr8if" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setStatusMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatusMessage("❌ Error sending message. Try again later.");
      });
  };

  return (
    <section id="contact" className="w-screen py-16 px-6 bg-dark dark:bg-[#1e1e1e] transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Feel free to reach out for collaborations or any inquiries.</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 max-w-3xl mx-auto bg-dark p-6 rounded-lg shadow-lg">
        <div className="mt-10 max-w-3xl mx-auto bg-dark dark:bg-[#2a2a2a] p-6 rounded-lg shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1e1e1e] text-black dark:text-white p-3 rounded-md w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1e1e1e] text-black dark:text-white p-3 rounded-md w-full"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1e1e1e] text-black dark:text-white p-3 rounded-md w-full mt-4 h-32"
        ></textarea>
        <button type="submit" className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
          Send Message
        </button>
      </form>

      {/* Status Message */}
      {statusMessage && <p className="text-center mt-4 text-gray-700 dark:text-gray-300">{statusMessage}</p>}
      <footer><p className="text-center mt-6">&copy; <span className="text-orange-600">Godie</span>Lesh 2025</p></footer>
    </section>
  );
};

export default Contact;
