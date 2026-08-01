import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTag,
  FaPaperPlane,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";

const ContactForm = () => {
  useReveal(".contact-form");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact-form" className="contact-form py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
              Get In Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
              Let's Brew Something Amazing Together
            </h2>

            <p className="mt-6 text-zinc-300 leading-8 text-base">
              Have a question about our coffee blends, private catering, or wholesale partnerships? Send us a message and our roasting team will connect with you within 24 hours.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4 bg-[#1a1815] border border-zinc-700/60 p-5 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shrink-0">
                  ☕
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    Artisanal Fresh Roast
                  </h4>
                  <p className="text-zinc-300 text-sm">
                    Small-batch roasted weekly for peak flavor notes.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#1a1815] border border-zinc-700/60 p-5 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shrink-0">
                  🚚
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    Express Doorstep Delivery
                  </h4>
                  <p className="text-zinc-300 text-sm">
                    Free shipping on subscriptions & orders over $40.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#1a1815] border border-zinc-700/60 p-5 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shrink-0">
                  ❤️
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    Dedicated Concierge Support
                  </h4>
                  <p className="text-zinc-300 text-sm">
                    Our baristas are ready to answer your brewing queries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-zinc-700/70 bg-[#1a1815] p-8 shadow-2xl shadow-black/60"
          >
            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500 text-emerald-400 text-sm font-semibold text-center">
                Thank you! Your message has been sent successfully. We will reply shortly.
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                icon={<FaUser />}
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <InputField
                icon={<FaEnvelope />}
                placeholder="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <InputField
                icon={<FaPhoneAlt />}
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <InputField
                icon={<FaTag />}
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="mt-6">
              <textarea
                rows={5}
                placeholder="Write your message here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-zinc-700 bg-[#11100e] text-white p-5 outline-none focus:border-amber-500 placeholder-zinc-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-bold text-black transition hover:bg-amber-400 hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              Send Message
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ icon, ...props }) => (
  <div className="flex items-center gap-4 rounded-2xl border border-zinc-700 bg-[#11100e] px-5 transition-colors focus-within:border-amber-500">
    <span className="text-amber-500 text-lg">{icon}</span>
    <input
      {...props}
      className="w-full bg-transparent py-4 text-white placeholder-zinc-500 outline-none"
    />
  </div>
);

export default ContactForm;