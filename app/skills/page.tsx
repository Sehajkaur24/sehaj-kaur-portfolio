"use client";

import { motion } from "framer-motion";

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

export default function Skills() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-28 bg-gradient-to-b from-[#f8f5f1] to-[#f3eee7]">

      {/* HERO */}
      <Reveal>
        <section className="text-center max-w-4xl mx-auto mb-24">
          <h1 className="text-5xl font-semibold mb-6">
            Skills & Expertise
          </h1>
          <p className="text-[#5c4b3b] text-lg leading-relaxed">
            A multidisciplinary blend of technology, leadership,
            competitive excellence, and creative thinking.
          </p>
        </section>
      </Reveal>

      {/* SKILLS GRID */}
      <Reveal>
        <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Programming */}
          <SkillCard
            title=" Programming"
            items={[
              "Python",
              "C++",
              "C",
              "JavaScript",
              "SQL"
            ]}
          />

          {/* AI & ML */}
          <SkillCard
            title=" Artificial Intelligence & Machine Learning"
            items={[
              "Machine Learning",
              "Deep Learning",
              "Scikit-learn",
              "TensorFlow",
              "Pandas",
              "NumPy",
              "Matplotlib",
              "Streamlit",
              "Model Evaluation & Data Preprocessing"
            ]}
          />

          {/* Web Development */}
          <SkillCard
            title=" Web Development"
            items={[
              "HTML5",
              "CSS3",
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "REST APIs",
              "Authentication (JWT Basics)",
              "MongoDB",
              "MySQL",
              "PostgreSQL",
              "Git & Version Control"
            ]}
          />

          {/* Tools */}
          <SkillCard
            title=" Tools & Platforms"
            items={[
              "GitHub",
              "VS Code",
              "Postman",
              "Figma",
              "Canva"
            ]}
          />

          {/* Professional Strengths */}
          <SkillCard
            title=" Professional Strengths"
            items={[
              "Leadership & Initiative",
              "Strategic Thinking",
              "Competitive Mindset",
              "Time Management",
              "Team Collaboration",
              "Analytical Problem Solving"
            ]}
          />

          {/* Sports */}
          <SkillCard
            title=" Sports & Athletics"
            items={[
              "University-Level Basketball",
              "Competitive Cricket",
              "100m & 400m Sprint Events",
              "Team Leadership in Sports",
              "Competitive Discipline & Resilience"
            ]}
            
          />
          {/* Creative Expression */}
<SkillCard
  title=" Creative & Artistic Expression"
  items={[
    "Photography & Visual Composition",
    "Artistic Drawing & Sketching",
    "Nail Art Design & Aesthetic Detailing",
    "Color Theory & Visual Balance",
    "Content Creation"
  ]}
/>

        </section>
      </Reveal>

    </main>
  );
}

/* ================= COMPONENT ================= */

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="text-sm text-[#5c4b3b] space-y-2">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}