"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ===================== REVEAL ===================== */

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
function SkillBar({ skill, percentage }: any) {
  return (
    <div>
      <div className="flex justify-between mb-2 text-sm font-medium text-[#5c4b3b]">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-yellow-500 h-2 rounded-full"
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-28 bg-gradient-to-b from-[#f8f5f1] to-[#f3eee7]">
      ={/* ================= HERO SECTION ================= */}
      <Reveal>
        <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-28">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-semibold mb-6 leading-tight">
              Engineer. Athlete. Creative Thinker.
            </h1>

            <p className="text-lg text-[#5c4b3b] leading-relaxed mb-6">
              I am a B.Tech Computer Science student combining technical
              expertise with competitive leadership and creative expression. My
              journey reflects discipline in sports, innovation in AI, and
              artistic passion through photography and design.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="/resume/sehajkaur Resume.pdf"
                download
                className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80 transition"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/sehaj-kaur-232b8a280/"
                target="_blank"
                className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Sehajkaur24"
                target="_blank"
                className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border border-yellow-200">
              <Image
                src="/sehaj.jpg"
                alt="Sehaj Kaur"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </Reveal>
      {/* ================= ACHIEVEMENT SUMMARY ================= */}
      <Reveal>
        <section className="max-w-6xl mx-auto mb-28">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold">15+</h3>
              <p className="text-sm text-[#5c4b3b]">Competitive Wins</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold">10+</h3>
              <p className="text-sm text-[#5c4b3b]">Technical Certifications</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold">3+</h3>
              <p className="text-sm text-[#5c4b3b]">AI Projects</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold">5+</h3>
              <p className="text-sm text-[#5c4b3b]">Creative Disciplines</p>
            </div>
          </div>
        </section>
      </Reveal>
      {/* ================= HIGHLIGHT CARDS ================= */}
      <Reveal>
        <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-28">
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4"> Academic Excellence</h3>
            <p className="text-[#5c4b3b] text-sm leading-relaxed">
              Strong foundation in Data Structures, Algorithms, AI/ML, and
              scalable web systems. Currently maintaining a CGPA of 8.14, with a
              highest SGPA of 9.58 (Semester 5).
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">
              {" "}
              Competitive Leadership
            </h3>
            <p className="text-[#5c4b3b] text-sm leading-relaxed">
              University-level athlete in basketball & cricket, demonstrating
              discipline, teamwork, and high-pressure performance.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Innovation Mindset</h3>
            <p className="text-[#5c4b3b] text-sm leading-relaxed">
              Actively involved in AI-based projects and hackathons, focused on
              building technology that creates real impact.
            </p>
          </div>
        </section>
      </Reveal>
      {/* ================= SKILLS SNAPSHOT ================= */}
      {/* ================= PROFESSIONAL OVERVIEW ================= */}
      <Reveal>
        <section className="max-w-6xl mx-auto mb-28">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Professional Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-4">Programming & Development</h3>
              <p className="text-sm text-[#5c4b3b] leading-relaxed">
                Proficient in Python and modern JavaScript frameworks.
                Experienced in building scalable web applications using the MERN
                stack and Next.js with a strong understanding of data structures
                and algorithms.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-4">
                Artificial Intelligence & ML
              </h3>
              <p className="text-sm text-[#5c4b3b] leading-relaxed">
                Practical exposure to Machine Learning models, intelligent
                systems, and AI-driven solutions. Interested in applying AI and
                ML in real-world problem-solving environments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-4">Leadership & Teamwork</h3>
              <p className="text-sm text-[#5c4b3b] leading-relaxed">
                Represented university in inter-institution competitions,
                demonstrating discipline, resilience, and effective teamwork
                under competitive environments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-4">Innovation & Growth</h3>
              <p className="text-sm text-[#5c4b3b] leading-relaxed">
                Actively engaged in hackathons and innovation projects,
                continuously exploring new technologies and building impactful
                solutions with real-world relevance.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
      {/* ================= TIMELINE ================= */}
      <Reveal>
        <section className="max-w-5xl mx-auto mb-28">
          <h2 className="text-3xl font-semibold text-center mb-14">
            My Journey
          </h2>

          <div className="space-y-10 border-l-2 border-yellow-400 pl-8">
            <div>
              <h3 className="font-semibold text-lg"> School Years</h3>
              <p className="text-sm text-[#5c4b3b]">
                Actively participated in art, academics, and competitive events.
                Secured top ranks in Olympiads and inter-school competitions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg"> University Growth</h3>
              <p className="text-sm text-[#5c4b3b]">
                Represented the university in inter-institution sports
                competitions, winning championships in basketball and cricket,
                and achieved 1st position in a university-level ideation
                competition competing against students from multiple
                institutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                {" "}
                Innovation & AI Projects
              </h3>
              <p className="text-sm text-[#5c4b3b]">
                Developed AI-driven solutions like JobShield and explored
                 AI systems, combining technical skills with
                real-world impact.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
      {/* ================= CREATIVE SIDE ================= */}
      <Reveal>
        <section className="max-w-6xl mx-auto mb-28">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Creative Expression
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-3"> Photography</h3>
              <p className="text-sm text-[#5c4b3b]">
                Passionate about capturing perspectives and storytelling through
                visual composition and detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-3"> Art & Drawing</h3>
              <p className="text-sm text-[#5c4b3b]">
                Experienced in creative sketching and artistic design, blending
                precision with imagination.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-3"> Nail Art Design</h3>
              <p className="text-sm text-[#5c4b3b]">
                Detail-oriented creative work showcasing patience, aesthetics,
                and innovative pattern creation.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
      {/* ================= VISION ================= */}
      <Reveal>
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Vision</h2>

          <p className="text-lg text-[#5c4b3b] leading-relaxed">
            My goal is to build intelligent, scalable systems that merge
            innovation with societal impact. I aspire to grow as a technology
            professional who balances analytical precision, leadership, and
            creativity to deliver meaningful solutions.
          </p>
        </section>
      </Reveal>
    </main>
  );
}
