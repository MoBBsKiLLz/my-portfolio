"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_0l49da7",
        "template_bp4jmam",
        formData,
        "GJZzGWmSz2nd_dcAu"
      );
      setStatus("Thank you for reaching out! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Sorry, there was an issue submitting your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="max-w-4xl mx-auto px-6 py-16 h-screen text-[var(--primary-color)] bg-[var(--secondary-color)]"
    >
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300  rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300  rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[var(--primary-color)] text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] border border-[var(--primary-color)]"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>

        {status && (
          <p className="mt-6 text-center text-lg text--[var(--primary-color)]">
            {status}
          </p>
        )}
      </section>
    </section>
  );
};

export default Contact;
