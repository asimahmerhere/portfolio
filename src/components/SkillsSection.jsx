import { useEffect, useRef, useState } from 'react'
import {
  ReactLogo,
  NextjsLogo,
  NodejsLogo,
  ExpressLogo,
  MongoLogo,
  TypescriptLogo,
  TailwindLogo,
  PostgresLogo,
  DockerLogo,
  GitLogo,
  RestApiLogo,
  UiUxLogo,
  PerfLogo,
  GraphqlLogo,
  ReduxLogo,
  RedisLogo,
  BullMqLogo,
  PrismaLogo,
} from './TechLogos'

const skillsData = [
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'EXPERT',
    experience: '3+ Years',
    color: '#ffffff',
    Icon: NextjsLogo,
    badge: 'Most Popular',
    description: 'Production-grade SSR, SSG, and App Router framework.',
    highlights: ['High-resolution SSR & App Router', 'Customizable Server Actions', 'Batch API & Route Middleware', 'AI-driven Image Optimization'],
    mutedItem: 'Seamless Vercel Edge integration',
    projectsCount: 14,
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    level: 'EXPERT',
    experience: '4+ Years',
    color: '#61DAFB',
    Icon: ReactLogo,
    badge: 'Most Popular',
    description: 'Component-driven UI with modern hooks and virtual DOM.',
    highlights: ['React 19 & Custom Hooks', 'Context & State Management', 'Performance Optimization', 'Reusable Component Systems'],
    mutedItem: 'Real-time collaboration tools',
    projectsCount: 22,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 'EXPERT',
    experience: '4+ Years',
    color: '#339933',
    Icon: NodejsLogo,
    badge: 'Core Engine',
    description: 'Asynchronous event-driven JavaScript runtime engine.',
    highlights: ['Asynchronous I/O & Streams', 'Microservice Architecture', 'REST & GraphQL Backend', 'Security & Rate Limiting'],
    mutedItem: 'Automated cluster scaling',
    projectsCount: 18,
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    level: 'EXPERT',
    experience: '4+ Years',
    color: '#00F0FF',
    Icon: ExpressLogo,
    badge: 'Core API',
    description: 'Minimalist web framework for HTTP servers and middleware.',
    highlights: ['Custom Middleware Pipeline', 'JWT & OAuth Authentication', 'Error Handling Frameworks', 'Scalable Route Modules'],
    mutedItem: 'Real-time WebSocket gateways',
    projectsCount: 20,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    level: 'ADVANCED',
    experience: '3+ Years',
    color: '#13AA52',
    Icon: MongoLogo,
    badge: 'NoSQL DB',
    description: 'High-performance document database for easy scaling.',
    highlights: ['Aggregation Pipelines', 'Indexing & Query Tuning', 'Schema Modeling & Mongoose', 'Atlas Cloud Deployment'],
    mutedItem: 'Multi-region replica sets',
    projectsCount: 16,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'ADVANCED',
    experience: '3+ Years',
    color: '#3178C6',
    Icon: TypescriptLogo,
    badge: 'Type Safety',
    description: 'Strongly typed JavaScript language for enterprise apps.',
    highlights: ['Strict Type Schemas', 'Generic Programming', 'Interface & Type Aliases', 'Compile-Time Safety'],
    mutedItem: 'AST Code Transformation',
    projectsCount: 15,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'EXPERT',
    experience: '3+ Years',
    color: '#38BDF8',
    Icon: TailwindLogo,
    badge: 'Most Popular',
    description: 'Utility-first CSS framework for rapid UI development.',
    highlights: ['Tailwind v4 & Dynamic Themes', 'Glassmorphism & Gradients', 'Responsive Layout Engine', 'Custom Plugin Extensions'],
    mutedItem: 'Fluid Typography Math',
    projectsCount: 25,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'PROFICIENT',
    experience: '2+ Years',
    color: '#336791',
    Icon: PostgresLogo,
    badge: 'SQL Database',
    description: 'Advanced open-source relational database engine.',
    highlights: ['Relational Schema Design', 'Complex SQL Joins', 'Prisma & Drizzle ORM', 'ACID Transaction Safety'],
    mutedItem: 'PostGIS Spatial Querying',
    projectsCount: 8,
  },
  {
    id: 'restapi',
    name: 'RESTful APIs',
    category: 'backend',
    level: 'EXPERT',
    experience: '4+ Years',
    color: '#0D9488',
    Icon: RestApiLogo,
    badge: 'Architecture',
    description: 'Architecting clean, scalable RESTful API specifications.',
    highlights: ['RESTful Standard Conventions', 'Swagger / OpenAPI Docs', 'CORS & Rate Limiting', 'Payload Compression'],
    mutedItem: 'gRPC Inter-service Comms',
    projectsCount: 25,
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'database',
    level: 'PROFICIENT',
    experience: '2+ Years',
    color: '#1D63ED',
    Icon: DockerLogo,
    badge: 'DevOps',
    description: 'Containerization technology for packaging apps.',
    highlights: ['Dockerfile Optimization', 'Docker Compose Setup', 'Multi-Stage Builds', 'Isolated Environments'],
    mutedItem: 'Kubernetes Pod Orchestration',
    projectsCount: 10,
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'database',
    level: 'EXPERT',
    experience: '4+ Years',
    color: '#F05032',
    Icon: GitLogo,
    badge: 'Version Control',
    description: 'Distributed version control system for CI/CD.',
    highlights: ['Git Flow & Branching', 'Merge Conflict Resolution', 'GitHub Actions CI/CD', 'Code Review Workflows'],
    mutedItem: 'Monorepo Lerna Setup',
    projectsCount: 30,
  },
  {
    id: 'redux',
    name: 'Redux Toolkit',
    category: 'frontend',
    level: 'ADVANCED',
    experience: '2+ Years',
    color: '#764ABC',
    Icon: ReduxLogo,
    badge: 'State Mgmt',
    description: 'Predictable global state flows for data-heavy React applications.',
    highlights: ['RTK Slice Architecture', 'Async Thunks & Cache Logic', 'Normalized Data Patterns', 'Reducer Composition'],
    mutedItem: 'Hydrated offline dashboards',
    projectsCount: 12,
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    level: 'ADVANCED',
    experience: '2+ Years',
    color: '#DC382D',
    Icon: RedisLogo,
    badge: 'Caching',
    description: 'In-memory data layer for fast cache, queue, and session flows.',
    highlights: ['Redis Pub/Sub', 'Rate Limiting & Session Store', 'Cache Invalidation Models', 'High-Availability Patterns'],
    mutedItem: 'Realtime leaderboard streams',
    projectsCount: 9,
  },
  {
    id: 'bullmq',
    name: 'BullMQ',
    category: 'backend',
    level: 'ADVANCED',
    experience: '2+ Years',
    color: '#F97316',
    Icon: BullMqLogo,
    badge: 'Job Queue',
    description: 'Reliable background task orchestration for async jobs and workloads.',
    highlights: ['Worker Concurrency Tuning', 'Delayed & Retry Jobs', 'Queue Event Monitoring', 'Failure Recovery Pipelines'],
    mutedItem: 'Bulk email batch workers',
    projectsCount: 7,
  },
  {
    id: 'prisma',
    name: 'Prisma',
    category: 'database',
    level: 'ADVANCED',
    experience: '2+ Years',
    color: '#38BDF8',
    Icon: PrismaLogo,
    badge: 'ORM',
    description: 'Type-safe database access and schema-driven application modeling.',
    highlights: ['Schema-first Modeling', 'Migrations & Seeding', 'Typed Queries', 'Postgres & Mongo Wiring'],
    mutedItem: 'Edge-safe query helpers',
    projectsCount: 11,
  },
  {
    id: 'uiux',
    name: 'UI/UX Design',
    category: 'frontend',
    level: 'ADVANCED',
    experience: '3+ Years',
    color: '#F43F5E',
    Icon: UiUxLogo,
    badge: 'Design System',
    description: 'Designing intuitive user interfaces and design systems.',
    highlights: ['Design System Tokens', 'Interactive Prototypes', 'Micro-Animations', 'Accessibility (a11y)'],
    mutedItem: 'Figma Auto-layout Tokens',
    projectsCount: 18,
  },
]

const marqueeLogos = [
  { name: 'React', Icon: ReactLogo, textColor: '#61DAFB' },
  { name: 'next.js', Icon: NextjsLogo, textColor: '#ffffff' },
  { name: 'node.js', Icon: NodejsLogo, textColor: '#43b02a' },
  { name: 'express', Icon: ExpressLogo, textColor: '#ffffff' },
  { name: 'mongoDB', Icon: MongoLogo, textColor: '#13AA52' },
  { name: 'TypeScript', Icon: TypescriptLogo, textColor: '#3178C6' },
  { name: 'tailwindcss', Icon: TailwindLogo, textColor: '#38BDF8' },
  { name: 'PostgreSQL', Icon: PostgresLogo, textColor: '#336791' },
  { name: 'docker', Icon: DockerLogo, textColor: '#1D63ED' },
  { name: 'git', Icon: GitLogo, textColor: '#F05032' },
  { name: 'GraphQL', Icon: GraphqlLogo, textColor: '#E535AB' },
  { name: 'REST API', Icon: RestApiLogo, textColor: '#0D9488' },
  { name: 'Redux Toolkit', Icon: ReduxLogo, textColor: '#A78BFA' },
  { name: 'Redis', Icon: RedisLogo, textColor: '#FCA5A5' },
  { name: 'BullMQ', Icon: BullMqLogo, textColor: '#FDBA74' },
  { name: 'Prisma', Icon: PrismaLogo, textColor: '#7DD3FC' },
]

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [heartState, setHeartState] = useState(() =>
    skillsData.reduce((acc, skill) => {
      acc[skill.id] = {
        liked: false,
        count: Math.floor(Math.random() * 90) + 200,
      }
      return acc
    }, {})
  )

  const handleHeartClick = (skillId) => {
    setHeartState((prev) => {
      const current = prev[skillId] ?? { liked: false, count: Math.floor(Math.random() * 90) + 200 }

      return {
        ...prev,
        [skillId]: {
          liked: !current.liked,
          count: current.liked ? current.count - 1 : current.count + 1,
        },
      }
    })
  }

  // PROBLEM WITH THE PREVIOUS ATTEMPT: reacting to the shrink with
  // React state happens one render behind. By the time useLayoutEffect
  // measured the new (shorter) height and called setSpacerHeight, the
  // browser may have already clamped/jumped the scroll position during
  // the render that shrank the grid. React state is just too slow for
  // this — it can't stop a browser-level scroll clamp from happening
  // in between renders.
  //
  // FIX: mutate the DOM directly, synchronously, in the click handler —
  // BEFORE setActiveTab ever runs. We lock the grid's min-height to its
  // current (tall) height right then and there. That way, when React
  // re-renders with fewer cards a moment later, the grid box never
  // actually gets shorter on screen (min-height holds it open), so
  // there is no shrink for the browser to react to, and nothing to clamp.
  //
  // Once the user actually scrolls, we release the min-height back to
  // normal so the page doesn't keep dead empty space at the bottom.
  const gridRef = useRef(null)

  const handleTabClick = (tabId) => {
    if (gridRef.current) {
      const currentHeight = gridRef.current.offsetHeight
      gridRef.current.style.transition = 'min-height 0.25s ease'
      gridRef.current.style.minHeight = `${currentHeight}px`
    }
    setActiveTab(tabId)
  }

  useEffect(() => {
    const releaseMinHeight = () => {
      if (gridRef.current) {
        gridRef.current.style.minHeight = ''
      }
    }
    window.addEventListener('scroll', releaseMinHeight, { passive: true })
    return () => window.removeEventListener('scroll', releaseMinHeight)
  }, [])

  const filteredSkills = skillsData.filter((skill) => {
    const matchesTab = activeTab === 'all' || skill.category === activeTab
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTab && matchesSearch
  })

  return (
    <section id="skills" className="relative py-24 bg-[#07111f] text-white overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#ff7b54]/15 via-[#9b8cff]/15 to-[#6df4ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="mt-6 font-bebas text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b54] via-[#9b8cff] to-[#6df4ff]">TECH STACK</span>
          </h2>
        </div>

        {/* Clean Logo Ribbon */}
        <div className="mt-16 relative overflow-hidden py-10">
          <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#07111f] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-[#07111f] to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden group">
            <div className="flex items-center gap-16 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((item, idx) => {
                const Icon = item.Icon
                return (
                  <div
                    key={`logo-ribbon-${idx}`}
                    className="flex items-center gap-3.5 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer"
                  >
                    <Icon className="w-8 h-8 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
                    <span
                      className="text-2xl font-bold tracking-tight"
                      style={{
                        color: item.textColor,
                        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { id: 'all', label: 'All Stack' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend & APIs' },
              { id: 'database', label: 'Database & DevOps' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className={`rounded-xs border-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-indigo-300 text-slate-950 '
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid - Tailwind-only card layout with borders */}
        <div ref={gridRef} className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => {
            const Icon = skill.Icon
            const currentHeart = heartState[skill.id] ?? { liked: false, count: 224 }

            return (
              <div className="card w-full bg-base-100 shadow-sm" key={skill.id}>
                <div className="card-body">
                  <span className="badge badge-xs badge-warning">{skill.badge}</span>
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{skill.name}</h2>
                    <span className="text-xl">{skill.experience}</span>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {skill.highlights.slice(0, 4).map((highlight, index) => (
                      <li key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                    <li className="opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="line-through">{skill.mutedItem}</span>
                    </li>
                    <li className="opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="line-through">{skill.projectsCount}+ expert implementations</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => handleHeartClick(skill.id)}
                      className="btn bg-indigo-300 text-black rounded-xs btn-block transition-colors duration-300 hover:bg-indigo-400 hover:text-red-600 flex items-center justify-center gap-2"
                      aria-pressed={currentHeart.liked}
                    >
                      <span className="text-lg leading-none">{currentHeart.liked ? '♥' : '♡'}</span>
                      <span className="text-sm font-semibold">Send a Heart</span>
                      <span className="text-sm font-semibold">{currentHeart.count}</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}