"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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

/* ===================== COUNTER ===================== */

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(counter);
        setCount(value);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return <span>{count}</span>;
}

/* ===================== BACKGROUND BLOBS ===================== */

function BackgroundBlobs() {
  return (
    <>
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-yellow-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
    </>
  );
}

/* ===================== DATA ===================== */

const positionWins = [
  /* 🥇 FIRST POSITIONS */
  {
    title: "1st Position – NMIMS Ideation Competition",
    description: "JobShield AI Innovation Project",
    image: "/certificates/ideation.png",
  },
  {
    title: "1st Position – Fashion Show",
    description: "Amity Got Talent Fashion Show",
    image: "/certificates/fashion.png",
  },
  {
    title: "1st Position – Inter Institution Sports Meet – Sangathan 2025",
    description: "Basketball",
    image: "/certificates/basketball.png",
  },
  {
    title: "1st Position – Inter Institution Sports Meet – Sangathan 2025",
    description: "Cricket",
    image: "/certificates/cricket.png",
  },
  {
    title: "1st Position – Inter University Sports Fest – Eklavya 2025",
    description: "Basketball",
  },
  {
    title: "1st Position – Inter Institution Sports Meet – Sangathan 2024",
    description: "Basketball",
  },
  {
    title: "1st Position – Inter Institution Sports Meet – Sangathan 2024",
    description: "Cricket",
  },
  {
    title: "1st Position – Inter Institution Sports Meet – Sangathan 2023",
    description: "Basketball",
  },
  {
    title: "1st Position – National Sports Day Celebrations 2025",
    description: "Basketball",
  },
  {
    title: "1st Position – National Sports Day Celebrations 2024",
    description: "Basketball",
  },
  {
    title: "1st Position – Infant Jesus Convent School",
    description: "Rakhi Making Competition",
  },
  {
    title: "1st Position – Youth Enclave Sports Day",
    description: "Lemon Spoon Race",
  },
  {
    title: "1st Position – Youth Enclave Sports Day",
    description: "Cycle Race",
  },
  /* 🥈 SECOND POSITIONS */
  {
    title: "2nd Position – Calcula Champ",
    description: "Mathematics Competition",
  },
  {
    title: "2nd Position – National Sports Day Celebrations 2024",
    description: "Tug of War",
  },
  {
    title: "2nd Position – Infant Jesus Convent School",
    description: "Diya Decoration",
  },
  {
    title: "2nd Position – Infant Jesus Convent School",
    description: "Creative Writing",
  },
  {
    title: "2nd Position – Infant Jesus Convent School",
    description: "Bucket Race",
  },
  {
    title: "2nd Position – Infant Jesus Convent School",
    description: "Relay Race",
  },
  {
    title: "2nd Position – Infant Jesus Convent School",
    description: "Two-Legged Race",
  },
  /* 🥉 THIRD POSITIONS */
  { title: "3rd Position – IIT Ropar Aarohan’25", description: "Basketball" },
  {
    title: "3rd Position – Inter Institution Sports Meet – Sangathan 2023",
    description: "100M Race",
  },
  {
    title: "3rd Position – Inter Institution Sports Meet – Sangathan 2023",
    description: "400M Race",
  },
  /* 🎖 SPECIAL */
  {
    title: "Orange Global Olympiad – Science",
    description: "School Rank 6 | Amongst Participating Schools Rank 16",
  },
  {
    title: "Karate – Yellow Belt (10th Kyu)",
    description: "KARATE-DO INDO-RYU ASSOCIATION INTERNATIONAL (INDIA)",
  },
  {
    title: "Very Good Grade – NIIT Nguru",
    description: "IT Wizard Plus Programme",
  },
];

const technicalCertifications = [
  {
    title:
      "Artificial Intelligence & Intellectual Property Workshop – C-DAC Mohali",
    image: "/certificates/ai summit.png",
  },
  {
    title: "Internship in AI/ML – C-DAC Mohali",
    image: "/certificates/cdac.png",
  },
  {
    title: "Hackathon, HackN Win 2.0-cgc Mohali",
    image: "/certificates/cgc.png",
  },
  {
    title: "Internship in AI/ML – Infosys springboard",
    image: "/certificates/infosys.png",
  },
  {
    title: "Design Thinking for ESG-NMIMS Chandigarh",
    image: "/certificates/design.png",
  },
  { title: "MERN Stack-Thinknext Technologies" },
  { title: "Technovation'23-Amity University Punjab" },
  { title: "Webnair for Innovation,Skills,Excellence- IEEE India council" },
  {
    title:
      "Applied machine elarning and explaianble AI in healthcare-Amity university Punjab",
  },
];

const participationCertificates = [
  "Painting Competition – Gurukul World",
  "Tech Utsav ’15 – National Robotics Championship",
  "Appreciation for First Vote – Lok Sabha Elections 2024",
  "Conserve My Planet Program",
  "Amity Institute for Competitive Examinations",
  "Basic Self Defence Certification",
  "Best-in-the-Game Talent Hunt – Vidyartha",
  "Discovery School Super League – BYJU’S",
];

/* ===================== COMPONENT ===================== */
export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const first = positionWins.filter((item) => item.title.includes("1st"));

  const featuredFirst = first.slice(0, 4);
  const otherFirst = first.slice(4);
  const featuredTech = technicalCertifications.slice(0, 5);
  const otherTech = technicalCertifications.slice(5);
  const second = positionWins.filter((item) => item.title.includes("2nd"));
  const third = positionWins.filter((item) => item.title.includes("3rd"));
  const special = positionWins.filter(
    (item) =>
      !item.title.includes("1st") &&
      !item.title.includes("2nd") &&
      !item.title.includes("3rd"),
  );

  return (
    <main className="relative min-h-screen px-6 md:px-12 py-28 bg-gradient-to-b from-[#f8f5f1] to-[#f3eee7] overflow-hidden">
      <BackgroundBlobs />

      {/* HERO */}
      <Reveal>
        <div className="text-center mb-20 relative z-10">
          <h1 className="text-5xl font-semibold mb-6">Achievements</h1>
          <p className="text-[#6b5c4f] mb-8">
            Excellence in Sports, Academics & Innovation
          </p>

          <div className="flex flex-wrap justify-center gap-12 text-[#5c4b3b]">
            <div className="text-center">
              <div className="text-2xl font-semibold">
                🥇 <Counter value={first.length} />+
              </div>
              <p className="text-sm mt-1">First Positions</p>
            </div>

            <div className="text-center">
              <div className="text-2xl font-semibold">
                🥈 <Counter value={second.length} />+
              </div>
              <p className="text-sm mt-1">Runner-Ups</p>
            </div>

            <div className="text-center">
              <div className="text-2xl font-semibold">
                🥉 <Counter value={third.length} />+
              </div>
              <p className="text-sm mt-1">Third Places</p>
            </div>

            <div className="text-center">
              <div className="text-2xl font-semibold">
                🎖 <Counter value={special.length} />+
              </div>
              <p className="text-sm mt-1">Special Achievements</p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <section className="mb-32 relative z-10">
          <h2 className="text-3xl font-semibold text-center mb-16">
            First Positions
          </h2>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
            {/* ================= LEFT SIDE – FEATURED ================= */}
            <div className="grid sm:grid-cols-2 gap-8">
              {featuredFirst.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#e8dfd6]"
                >
                  {item.image && (
                    <div
                      className="relative w-full h-52 cursor-pointer"
                      onClick={() => setSelectedImage(item.image!)}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />

                      {/* Badge */}
                      <span className="absolute top-3 left-3 bg-[#5c4b3b] text-white text-xs px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="font-semibold text-sm leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6b5c4f] mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ================= RIGHT SIDE – CLEAN LIST ================= */}
            <div className="flex flex-col gap-5">
              {otherFirst.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f9f6f2] rounded-xl px-6 py-4 border border-[#ece3da] hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-xs text-[#7b6d60] mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* SECTION TEMPLATE */}
      {[
        {
          title: " Second Positions",
          data: second,
          color: "from-gray-100 to-gray-50 border-gray-300",
        },
        {
          title: " Third Positions",
          data: third,
          color: "from-orange-100 to-orange-50 border-orange-300",
        },
      ].map((section, idx) => (
        <Reveal key={idx}>
          <section className="mb-28 relative z-10">
            <h2 className="text-3xl font-semibold text-center mb-14">
              {section.title}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {section.data.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className={`bg-gradient-to-br ${section.color} border rounded-2xl shadow-md overflow-hidden`}
                >
                  {item.image && (
                    <div
                      className="relative w-full h-40 cursor-pointer"
                      onClick={() => setSelectedImage(item.image!)}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="p-4">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-[#5c4b3b]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>
      ))}

      {/* SPECIAL ACHIEVEMENTS */}
      <Reveal>
        <section className="mb-24 relative z-10">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Special Achievements
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {special.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#6b5c4f]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
      {/* ================= CERTIFICATIONS ================= */}

      <Reveal>
        <section className="mb-28 relative z-10">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Certifications
          </h2>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* TECHNICAL CERTIFICATIONS */}
            <div>
              <h3 className="text-xl font-semibold mb-8">
                Technical Certifications
              </h3>

              {/* ================= FEATURED TECH CERTIFICATIONS ================= */}

              <div className="mb-12">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredTech.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6 }}
                      className="relative h-52 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                      onClick={() => item.image && setSelectedImage(item.image)}
                    >
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      )}

                      <div className="absolute bottom-0 w-full bg-black/60 text-white text-xs p-3">
                        {item.title}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ================= OTHER TECH CERTIFICATIONS LIST ================= */}

              <div className="flex flex-col gap-4">
                {otherTech.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#f9f6f2] rounded-lg px-5 py-3 border border-[#ece3da] hover:shadow-md transition"
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>

            {/* PARTICIPATION CERTIFICATES */}
            <div>
              <h3 className="text-xl font-semibold mb-8">
                Participation & Workshops
              </h3>

              <div className="grid gap-4">
                {participationCertificates.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6 }}
                    className="bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90%] md:w-[60%] h-[80%]">
            <Image
              src={selectedImage}
              alt="Certificate"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}
