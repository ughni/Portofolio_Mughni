"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
    alert(`Thanks for your message, ${data.name}! I'll get back to you soon.`);
    reset();
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-primary" size={24} />,
      title: "Email",
      value: "hello@mughni.dev",
      link: "mailto:hello@mughni.dev",
    },
    {
      icon: <FiMapPin className="text-primary" size={24} />,
      title: "Location",
      value: "Jakarta, Indonesia",
      link: "https://maps.google.com/?q=Jakarta",
    },
    {
      icon: <FiPhone className="text-primary" size={24} />,
      title: "Phone",
      value: "+62 123 4567 890",
      link: "tel:+621234567890",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Get In Touch</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary">Contact Information</h3>
            <p className="text-text-secondary">I m always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a key={index} whileHover={{ x: 5 }} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="p-2 bg-surface rounded-lg group-hover:bg-primary/10 transition-colors">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-text-primary">{item.title}</h4>
                    <p className="text-text-secondary">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-text-primary mb-3">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", url: "https://github.com/ughni" },
                  { name: "LinkedIn", url: "https://linkedin.com/in/m-mughni" },
                  { name: "Instagram", url: "https://instagram.com/ugni_mh" },
                ].map((social, index) => (
                  <motion.a key={index} whileHover={{ y: -3 }} href={social.url} target="_blank" rel="noopener noreferrer" className="bg-surface p-3 rounded-lg hover:bg-primary/10 transition-colors" aria-label={social.name}>
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-surface p-6 rounded-xl shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Hi Mughni, I'd like to talk about..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors flex items-center justify-center gap-2">
                <FiSend size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
