// Manish_Portfolio.jsx
// Single-file React component (default export). TailwindCSS required in your project.
// How to use:
// 1. Place this file in a React project (create-react-app / Vite) that has Tailwind configured.
// 2. Replace placeholders (photo URL, contact links, hosted resume path) as needed.
// 3. Import and render <ManishPortfolio /> in App.jsx.

import React from "react";

export default function ManishPortfolio() {
  const data = {
    name: "Manish Kaushik",
    title: "Frontend Developer",
    location: "Faridabad, India",
    email: "manish.kaushik0301@gmail.com",
    phone: "+91 9992967441",
    linkedin: "https://www.linkedin.com/in/pandatmanish52",
    github: "https://github.com/i-m-codder",
    resume: "/Manish_Resume.pdf", // set to hosted resume path
    about:
      "Frontend developer who builds responsive, accessible, and fast web apps using HTML, CSS, JavaScript and React. Strong fundamentals in DSA, OOPS and software engineering.",
    education: {
      institution: "J.C. Bose University of Science And Technology, YMCA, Faridabad",
      degree: "B.Tech — Computer Science and Engineering",
      period: "2020 - 2024",
      cgpa: "8.90",
    },
    skills: [
      "JavaScript", "React.js", "Next.js", "HTML5", "CSS3", "Bootstrap",
      "Java", "Git", "Data Structures & Algorithms",
    ],
    experience: [
      {
        company: "SST Cloud.in",
        role: "Frontend Developer",
        period: "Jan 2024 – Sep 2024",
        bullets: [
          "Built responsive web apps using React, HTML, CSS and JS.",
          "Collaborated with designers and PMs to deliver high-quality features.",
          "Integrated APIs and optimised app performance for faster loads.",
        ],
      },
      {
        company: "Provana India Pvt. Ltd.",
        role: "Process Expert",
        period: "Oct 2024 – Present",
        bullets: [
          "Managed process workflows and provided technical support.",
          "Worked on performance improvements and data analysis using Excel.",
        ],
      },
    ],
    projects: [
      {
        name: "Online Voting System",
        tech: "HTML, CSS, JavaScript, React",
        desc:
          "A secure e-voting platform with user registration, unique IDs and encrypted vote storage.",
        highlights: ["User authentication", "Real-time vote counting", "Encrypted storage"],
      },
      {
        name: "E-commerce Website",
        tech: "HTML, CSS, JavaScript, React",
        desc:
          "Fully functional e-commerce app with cart, reviews and checkout flows.",
        highlights: ["Product listings", "Shopping cart", "Performance optimization"],
      },
    ],
    achievements: [
      "Launched Online Voting System used by 100+ users.",
      "Reduced e-commerce platform loading time by 40%.",
      "Contributed to a 65% average increase in client satisfaction.",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-slate-100 antialiased">
      <div className="max-w-5xl mx-auto p-6 lg:p-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-indigo-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center">
              {/* replace with your image */}
              <span className="uppercase tracking-wide text-xs text-slate-300">Manish</span>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{data.name}</h1>
            <p className="text-slate-300 mt-1">{data.title} — {data.location}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a href={data.resume} download className="inline-block bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-lg font-medium">Download Resume</a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="inline-block border border-slate-700 px-4 py-2 rounded-lg">LinkedIn</a>
              <a href={data.github} target="_blank" rel="noreferrer" className="inline-block border border-slate-700 px-4 py-2 rounded-lg">GitHub</a>
            </div>

            <div className="mt-4 text-sm text-slate-300">
              <div>{data.email} • {data.phone}</div>
            </div>
          </div>
        </header>

        <main className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <section className="lg:col-span-2 bg-gradient-to-b from-slate-800/30 to-slate-900/40 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">{data.about}</p>

            <div className="mt-6">
              <h3 className="font-semibold">Education</h3>
              <div className="mt-2 text-sm text-slate-300">
                <div className="font-medium">{data.education.institution}</div>
                <div>{data.education.degree} • CGPA: {data.education.cgpa}</div>
                <div className="text-xs mt-1">{data.education.period}</div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Experience</h3>
              <div className="mt-3 space-y-4">
                {data.experience.map((exp, idx) => (
                  <article key={idx} className="p-4 bg-slate-800/60 rounded-xl">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-medium">{exp.role} — <span className="text-slate-300">{exp.company}</span></div>
                        <div className="text-xs text-slate-400 mt-1">{exp.period}</div>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mt-3 text-slate-300 text-sm">
                      {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Projects</h3>
              <div className="mt-3 space-y-4">
                {data.projects.map((p, i) => (
                  <div key={i} className="p-4 bg-slate-800/60 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-slate-400">{p.tech}</div>
                    </div>
                    <p className="text-slate-300 mt-2 text-sm">{p.desc}</p>
                    <div className="mt-2 text-slate-400 text-xs">Highlights: {p.highlights.join(', ')}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Achievements</h3>
              <ul className="list-disc list-inside mt-3 text-slate-300 text-sm">
                {data.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          </section>

          {/* Right column */}
          <aside className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-900/40 shadow-lg">
              <h3 className="font-semibold">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.skills.map((s, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-700/60 text-xs">{s}</span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-900/40 shadow-lg">
              <h3 className="font-semibold">Contact</h3>
              <div className="mt-3 text-sm text-slate-300">
                <div className="break-words">📧 <a href={`mailto:${data.email}`} className="underline">{data.email}</a></div>
                <div>📞 {data.phone}</div>
                <div className="mt-3 flex gap-2">
                  <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-xs underline">LinkedIn</a>
                  <a href={data.github} target="_blank" rel="noreferrer" className="text-xs underline">GitHub</a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-900/40 shadow-lg">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a href={data.resume} download className="px-3 py-2 bg-indigo-600/80 rounded-md text-center">Download Resume</a>
                <a href={data.github} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded-md text-center">View Code on Github</a>
              </div>
            </div>
          </aside>
        </main>

        <footer className="mt-12 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} {data.name} — Built with ❤️ using React.
        </footer>
      </div>
    </div>
  );
}
