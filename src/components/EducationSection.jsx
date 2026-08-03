const educationItems = [
  {
    degree: 'BS Information Technology',
    university: 'Bahria University Pakistan',
    logo: '/bahria.png',
    duration: 'Spring 2022 - Fall 2025',
    description:
      'Focused on core IT concepts including programming, database, networking and software engineering with hands on academic projects and practical lab work.',
  },
  {
    degree: 'Mobile and Web Development',
    university: 'Saylani Mass IT',
    logo: '/smit.png',
    duration: 'Nov 2024 - Feb 2026',
    description:
      'Modern web and mobile development technologies with practical training in building responsive applications and real world development projects.',
  },
   {
    degree: 'Mobile App Development',
    university: 'NED Academy',
    logo: '/ned.png',
    duration: 'Sep 2024 - Nov 2024',
  description:
  'Comprehensive training in modern web and mobile app development, covering responsive design, full-stack technologies, and real-world projects that emphasize clean code, problem-solving and industry best practices.',
  },
]

const skills = ['MongoDB', 'Express Js', 'React Js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'RestAPI', 'Next.js']

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 overflow-hidden bg-[#07111f] text-white">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#ff7b54]/15 via-[#9b8cff]/15 to-[#6df4ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <h2 className="mt-2 font-bebas text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b54] via-[#9b8cff] to-[#6df4ff]">ABOUT ME & EDUCATION</span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-5">
          <div className="relative w-full p-3 md:p-5 shadow-sm bg-transparent">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">
              <div className="space-y-5">
                <div>
                  <header>
                    <h2 className="text-xl md:text-3xl font-bold font-fjalla-one text-white mb-3">
                      About Me
                    </h2>
                  </header>
                  <div className="flex justify-start gap-3">
                    <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-indigo-700 flex items-center justify-center text-white">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="leading-relaxed text-justify text-sm text-white/90">
                      I&apos;m a MERN stack developer who lives at the intersection of clean code and high performance design. I specialize in building full stack applications where a fluid React frontend meets a rugged Node and Express architecture, all powered by the scalability of MongoDB. Whether I&apos;m mapping out the real time data flow for the Quantum Analytics Engine or fine tuning a responsive UI, I&apos;m obsessed with the HOW as much as the WHAT ensuring every click feels snappy and every backend query is optimized for speed. I don&apos;t just build functional tools, I build digital experiences that are as intuitive for the user as they are robust under the hood.
                    </p>
                  </div>
                </div>

                <div>
                  <header>
                    <h2 className="text-xl md:text-3xl font-bold font-fjalla-one text-white mb-3">
                      Studied
                    </h2>
                  </header>
                  <div className="flex flex-wrap justify-start gap-3">
                    {skills.map((skill) => (
                      <p
                        key={skill}
                        className="border cursor-default border-white/25 hover:bg-white/5 text-white text-[13px] rounded-full px-5 py-1.5"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-slate-300 -translate-x-1/2" />

              <div>
                <header>
                  <h2 className="text-xl md:text-3xl font-bold font-fjalla-one text-white mb-3">
                    Education
                  </h2>
                </header>

                <div className="space-y-4">
                  {educationItems.map((item, index) => (
                    <div
                      key={`${item.degree}-${index}`}
                      className="w-full border border-white/20 p-5 rounded-xl hover:shadow-sm bg-white/5"
                    >
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:items-center justify-between w-full text-white/90">
                        <div className="flex items-center gap-3">
                          <div className="bg-white/10 border border-white/20 rounded-lg p-2 shrink-0">
                            <img src={item.logo} alt={item.university} className="w-8 h-8 object-contain" />
                          </div>

                          <div>
                            <h3 className="text-sm md:text-base font-medium text-white">{item.degree}</h3>
                            <div className="text-xs md:text-sm text-sky-300">{item.university}</div>
                          </div>
                        </div>

                        <div className="text-xs font-medium bg-white/10 px-2 py-1 rounded text-white/90">{item.duration}</div>
                      </div>

                      <p className="mt-4 text-xs md:text-sm text-white/80">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="speech-bubble-tail hidden lg:block" />
          </div>

          <div className="w-full flex flex-col justify-start items-end text-right px-4">
            <div className="relative inline-block">
              <h2 className="text-xl font-bold text-white">Asim Khan</h2>
            </div>
            <p className="text-sm text-white/75">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
