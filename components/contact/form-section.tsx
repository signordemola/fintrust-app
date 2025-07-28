"use client";

import { useState } from "react";
import React from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contactMethod: "email",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? (e.target as HTMLInputElement).value : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      contactMethod: "email",
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-600 text-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Send Us a Message
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              {
                " Fill out the form below and we'll get back to you as soon as possible"
              }
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-soft"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl bg-text-white border border-border-color focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-colors"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-text-white border border-border-color focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-colors"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded-xl bg-text-white border border-border-color focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-colors"
                required
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="account">Account Support</option>
                <option value="loan">Loan Information</option>
                <option value="technical">Technical Support</option>
              </select>
            </div>
            <div className="mt-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-3 rounded-xl bg-text-white border border-border-color focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-colors"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mt-8">
              <label className="block text-sm font-medium text-foreground mb-3">
                Preferred Contact Method
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    className="text-primary-600 focus:ring-primary-600/20"
                    checked={formData.contactMethod === "email"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-foreground">Email</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    className="text-primary-600 focus:ring-primary-600/20"
                    checked={formData.contactMethod === "phone"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-foreground">Phone</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-text-white hover:bg-primary-700 transition-all duration-300 group"
            >
              Send Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
