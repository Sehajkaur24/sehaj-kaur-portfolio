"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Reveal({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_2awfis8",   
        "template_cx87o2t",  
        form.current,
        "h0GC4JxgT-Ye6U7GN"   
      )
      .then(
        () => {
          setLoading(false);
  setSuccess(true);
  form.current?.reset();

  setTimeout(() => {
    setSuccess(false);
  }, 6000);
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message. Try again.");
          console.log(error);
        }
      );
  };

  return (
    <main className="min-h-screen px-6 md:px-12 py-28 bg-gradient-to-b from-[#f8f5f1] to-[#f3eee7]">

      <Reveal>
        <section className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-semibold mb-6">
            Let’s Connect
          </h1>
          <p className="text-[#5c4b3b] text-lg">
            Open to internships, collaborations, and innovative opportunities.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-md">

          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-200"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-200"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

           {success && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-xl mt-4 text-sm"
  >
     Message sent successfully! I’ll respond soon.
  </motion.div>
)}

          </form>

          {/* Direct Contact Section */}
          <section className="mt-16 text-center space-y-4">
            <h2 className="text-xl font-semibold">Or Reach Me Directly</h2>

            <p className="text-[#5c4b3b]">
              📧 sehajkaur9155@gmail.com
            </p>

            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://www.linkedin.com/in/sehaj-kaur-232b8a280/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border rounded-full hover:bg-black hover:text-white transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Sehajkaur24"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border rounded-full hover:bg-black hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </section>

        </section>
      </Reveal>

    </main>
  );
}