import Reveal from "../components/Reveal";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">


      <Reveal>
        <section className="w-full max-w-4xl text-center mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Engineering Mind with an{" "}
            <span className="text-[#5c4b3b]">Athlete’s Discipline</span> and an
            Artist’s Creativity.
          </h1>

          <p className="mt-6 text-lg text-[#7b6d60]">
            B.Tech CSE Student | AI/ML Enthusiast | Sports Achiever | Innovation-
            Driven
          </p>
          <p className="mt-4 text-sm text-[#9b8c7e] tracking-wide">
            Building intelligent systems. Competing beyond limits. Creating
            beyond boundaries.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects">
              <button className="px-7 py-3 bg-[#5c4b3b] text-white rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                View Projects
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-7 py-3 border border-[#5c4b3b] rounded-full hover:bg-[#5c4b3b] hover:text-white transition-all duration-300">
                Contact Me
              </button>
            </Link>
            <a
            href="/resume/sehajkaur Resume.pdf"
            download
            className="px-7 py-3 border border-[#5c4b3b]/60 text-[#5c4b3b] rounded-full hover:bg-[#5c4b3b] hover:text-white transition-all duration-300"
          >
            Download Resume
          </a>
          </div>
        </section>
        <section className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">AI/ML</h3>
            <p className="text-sm text-[#7b6d60]">Specialization</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Rank 6</h3>
            <p className="text-sm text-[#7b6d60]">
              Orange Global Science Olympiad
            </p>
            <p className="text-xs text-[#9b8c7e] mt-1 tracking-wide">
              School Rank 6 • Among Participating Schools Rank 16
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Sports</h3>
            <p className="text-sm text-[#7b6d60]">
              University-Level Sports Achiever
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Ideation/Innovation</h3>
            <p className="text-sm text-[#7b6d60]">Competition Winner</p>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
