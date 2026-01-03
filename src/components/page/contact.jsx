import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "cheykimrith25@gmail.com",
      description: "We'll respond within 24 hours",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+855 95248529",
      description: "Mon-Fri, 9AM-6PM EST",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "123 Gaming Street",
      description: "Digital City, DC 10001",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "⏰",
      title: "Support Hours",
      details: "24/7 Live Chat",
      description: "Available in the app",
      color: "from-orange-500 to-red-500",
    },
  ];

  const faqs = [
    {
      question: "How do I report a bug in a game?",
      answer:
        "Use the in-game report feature or contact us through this form with details about the bug.",
    },
    {
      question: "Can I suggest new game features?",
      answer:
        "Yes! We love hearing from our community. Share your ideas through our suggestion form or community forums.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Go to the login page and click 'Forgot Password'. You'll receive an email with reset instructions.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Currently we're web-based, but a mobile app is in development and coming soon!",
    },
    {
      question: "How can I become a beta tester?",
      answer:
        "Join our Discord community for early access opportunities and beta testing announcements.",
    },
  ];

  const teamContacts = [
    {
      name: "Alex Chen",
      role: "Support Lead",
      email: "alex@chakdav.app",
      avatar: "👨‍💻",
      color: "bg-gradient-to-r from-blue-400 to-cyan-400",
    },
    {
      name: "Sarah Johnson",
      role: "Community Manager",
      email: "sarah@chakdav.app",
      avatar: "👩‍💼",
      color: "bg-gradient-to-r from-purple-400 to-pink-400",
    },
    {
      name: "Mike Rodriguez",
      role: "Technical Support",
      email: "mike@chakdav.app",
      avatar: "🔧",
      color: "bg-gradient-to-r from-green-400 to-emerald-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Have questions, feedback, or need help? We're here for you 24/7.
              Reach out and let's make your gaming experience better!
            </p>
          </div>
        </div>

        {/* Animated circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${method.color} rounded-2xl p-6 text-white transform hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-lg font-semibold mb-1">{method.details}</p>
                <p className="text-white/80">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl text-white">📝</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  We'll get back to you as soon as possible
                </p>
              </div>
            </div>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-green-800">
                      Message Sent Successfully!
                    </p>
                    <p className="text-green-600">
                      We'll respond to your inquiry within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Account Help">Account Help</option>
                  <option value="Game Support">Game Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">* Required fields</div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Team Contacts */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Support Team
              </h2>
              <div className="space-y-4">
                {teamContacts.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl ${member.color}`}
                    >
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        {member.email}
                      </a>
                    </div>
                    <button className="text-blue-500 hover:text-blue-600">
                      <span className="text-2xl">💬</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-0"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="text-blue-500 mr-2">❓</span>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 pl-8">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map & Social Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Social Media */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
                <p className="text-gray-300 mb-8">
                  Join our community on social media for updates, tips, and
                  exclusive content.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      platform: "Discord",
                      icon: "🎮",
                      handle: "@chakdav",
                      color: "from-indigo-500 to-purple-500",
                    },
                    {
                      platform: "Twitter",
                      icon: "🐦",
                      handle: "@chakdav_app",
                      color: "from-blue-400 to-cyan-500",
                    },
                    {
                      platform: "Instagram",
                      icon: "📸",
                      handle: "@chakdav.gaming",
                      color: "from-pink-500 to-rose-500",
                    },
                    {
                      platform: "YouTube",
                      icon: "🎬",
                      handle: "Chakdav Gaming",
                      color: "from-red-500 to-orange-500",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`flex items-center justify-between p-4 bg-gradient-to-r ${social.color}/20 hover:${social.color}/30 rounded-xl transition-all group`}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{social.icon}</span>
                        <div>
                          <div className="font-semibold">{social.platform}</div>
                          <div className="text-sm text-gray-300">
                            {social.handle}
                          </div>
                        </div>
                      </div>
                      <span className="text-2xl group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map & Location */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                {/* Map Placeholder */}
                <div className="h-64 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-6xl mb-4">📍</span>
                    <h3 className="text-2xl font-bold">Our Location</h3>
                    <p className="text-lg">123 Gaming Street, Digital City</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">
                        Business Hours
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span className="font-semibold">
                            9:00 AM - 6:00 PM
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Saturday</span>
                          <span className="font-semibold">
                            10:00 AM - 4:00 PM
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sunday</span>
                          <span className="font-semibold">Support Online</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">
                        Quick Links
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-700 flex items-center"
                          >
                            <span className="mr-2">📄</span>
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-700 flex items-center"
                          >
                            <span className="mr-2">📝</span>
                            Terms of Service
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-700 flex items-center"
                          >
                            <span className="mr-2">🎮</span>
                            Community Guidelines
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">
                        Emergency Support
                      </h4>
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">🚨</span>
                          <div>
                            <p className="font-semibold text-red-700">
                              Critical Issues
                            </p>
                            <p className="text-sm text-red-600">
                              Contact: emergency@chakdav.app
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-32 h-32 bg-white rounded-full"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${10 + i * 40}%`,
                  }}
                ></div>
              ))}
            </div>

            <div className="relative z-10 text-white">
              <h2 className="text-4xl font-bold mb-6">
                Need Immediate Assistance?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join our live support chat available 24/7 in the app.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  🚀 Go to Live Chat
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  📱 Download App
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
