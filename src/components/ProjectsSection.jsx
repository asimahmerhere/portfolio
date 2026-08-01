const projectsData = [
  {
    title: 'ScrapeFlow Automation',
    description:
      'A workflow-driven web scraping platform designed to automate data collection from discovery to extraction, cleanup, and export. It helps users run structured scraping pipelines with a cleaner operational flow and better data handoff efficiency.',
    stack: ['React Flow', 'Next.js', 'Selenium', 'TailwindCSS'],
    duration: 'Feb - Mar 2026',
    githubUrl: 'https://github.com/asimbukc/ScrapeFlow-Automation',
  },
  {
    title: 'Trendzone',
    description:
      'An elegant e-commerce frontend focused on fast product discovery, smooth authentication, and a dependable shopping cart experience. Built to feel polished across mobile and desktop screens while keeping the purchase journey intuitive and conversion-friendly.',
    stack: ['React', 'Tanstack Query', 'Redux Toolkit Query', 'TailwindCSS'],
    duration: 'Mar 2026',
    githubUrl: 'https://github.com/asimbukc/trend-zone',
  },
  {
    title: 'Agent Marketplace',
    description:
      'A property-focused marketplace experience for real estate agents to browse listings, manage buyer-seller interactions, and streamline contact workflows. The interface is structured to make leads, listings, and agent communication more efficient in one place.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TailwindCSS'],
    duration: 'May - Jun 2026',
    githubUrl: 'https://github.com/asimbukc/agent-marketplace',
  },
  {
    title: 'DevForum',
    description:
      'A modern developer forum built for knowledge sharing, technical collaboration, and community-driven problem solving. It brings together reusable UI patterns, thoughtful discussion flow, and a clean environment for developers to learn and contribute.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'ShadCN', 'TailwindCSS'],
    duration: 'Jun 2026 - Present',
    githubUrl: 'https://github.com/asimbukc/devforum',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#07111f] py-24 text-white">
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#ff7b54]/15 via-[#9b8cff]/15 to-[#6df4ff]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="mt-6 font-bebas text-5xl tracking-wide text-white sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#ff7b54] via-[#9b8cff] to-[#6df4ff] bg-clip-text text-transparent">
              COMPLETED PROJECTS
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-2">
          {projectsData.map((project) => (
            <article key={project.title} className="card w-full bg-base-100 shadow-sm">
              <div className="card-body">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bebas text-[2rem] leading-none text-white sm:text-[2.35rem]">{project.title}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b8cff]">
                    {project.duration}
                  </span>
                </div>

                <p className="mt-4 text-[15px] leading-7 text-white/82">{project.description}</p>

                <ul className="mt-6 flex flex-col gap-2 text-xs text-white/85">
                  {project.stack.map((item) => (
                    <li key={item}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="me-2 inline-block size-4 text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-block rounded-xs bg-indigo-300 text-black transition-colors duration-300 hover:bg-indigo-400 hover:text-black"
                  >
                    See on GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
