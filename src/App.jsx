import { useEffect, useRef, useState } from 'react'
import './App.css'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { EducationSection } from './components/EducationSection'
import { DiscoSection } from './components/DiscoSection'

const techStack = ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Next.js', 'Nest Js', 'Tailwind CSS', 'PostgreSQL', 'RestAPI']

const CROSSFADE_MS = 900 // must match the duration-[900ms] classes below

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern shopping experience with secure checkout, dynamic product pages, and CMS-driven inventory.',
    stack: ['Next.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'A responsive admin panel for tracking users, sales, and business growth in real time.',
    stack: ['React', 'Node.js', 'Charts'],
  },
  {
    title: 'Portfolio Experience',
    description: 'A polished personal brand website with strong storytelling, clean UI, and smooth interactions.',
    stack: ['Vite', 'Tailwind', 'Framer Motion'],
  },
]

const experience = [
  {
    role: 'Full Stack Developer',
    period: '2023 — Present',
    detail: 'Designing and shipping end-to-end web applications with a focus on clean architecture and fast delivery.',
  },
  {
    role: 'Frontend Developer',
    period: '2021 — 2023',
    detail: 'Built responsive interfaces and interactive dashboards while collaborating closely with product teams.',
  },
]

function App() {
  const [activeTech, setActiveTech] = useState(techStack[4])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayTech, setDisplayTech] = useState(techStack[4])
  const [introState, setIntroState] = useState('intro')
  const activeIndexRef = useRef(techStack.indexOf(techStack[4]))
  const transitionTimeoutRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = introState !== 'home' ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [introState])

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      setIntroState('closing')
    }, 3000)

    const swapTimer = setTimeout(() => {
      setIntroState('home')
    }, 3900)

    return () => {
      clearTimeout(closeTimer)
      clearTimeout(swapTimer)
    }
  }, [])

  const indexRef = useRef(4) // starting index, matches techStack[4]
  const [layerA, setLayerA] = useState(techStack[4])
  const [layerB, setLayerB] = useState(techStack[(4 + 1) % techStack.length])
  const [activeLayer, setActiveLayer] = useState('A') // which one is currently visible
  const wordTimeoutRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % techStack.length
      indexRef.current = nextIndex

      // 1. Flip visibility now. The incoming (currently hidden) layer
      //    already holds the correct word from the previous cycle's
      //    preload, so it fades in showing the right text right away.
      setActiveLayer(prev => (prev === 'A' ? 'B' : 'A'))

      // 2. Only AFTER the outgoing layer has fully faded out do we
      //    overwrite its text — with the word after next — so it's
      //    ready to be the next thing that fades in.
      wordTimeoutRef.current = setTimeout(() => {
        const followingWord = techStack[(nextIndex + 1) % techStack.length]
        setActiveLayer(current => {
          if (current === 'B') {
            setLayerA(followingWord) // A is hidden now, safe to update
          } else {
            setLayerB(followingWord) // B is hidden now, safe to update
          }
          return current
        })
      }, CROSSFADE_MS)
    }, 2200)

    return () => {
      clearInterval(interval)
      clearTimeout(wordTimeoutRef.current)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div
        className={`absolute inset-0 z-20 transition-all duration-700 ease-in-out ${introState === 'home' ? 'pointer-events-none opacity-0 scale-[1.03] blur-[3px]' : 'opacity-100 scale-100'
          }`}
      >
        <DiscoSection isClosing={introState === 'closing'} />
      </div>

      {introState === 'home' && (
        <div className="min-h-screen bg-[#07111f] text-white">
          {/* Original Hero Section */}
          <section className="relative min-h-screen overflow-hidden bg-[#07111f]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,123,84,0.28),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(94,89,255,0.3),_transparent_35%)]" />
            <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

            <div className="absolute left-6 top-1/2 z-20 w-[92%] max-w-3xl -translate-y-1/2 md:left-16">
              <h2 className="font-bebas text-3xl tracking-[0.25em] text-[#ffb199] sm:text-4xl lg:text-5xl">
                Full Stack Developer
              </h2>

              <h1 className="mt-3 font-bebas text-[4.5rem] leading-none text-white sm:text-[6rem] md:text-[8rem] lg:text-[9rem]">
                M ASIM KHAN
              </h1>

              <div className="relative mt-4 h-12 sm:h-14 lg:h-16">
                <span
                  className={`absolute inset-0 font-bebas text-3xl text-[#d8cfff] transition-opacity duration-[900ms] ease-out sm:text-4xl lg:text-5xl ${activeLayer === 'A' ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  {layerA}
                </span>
                <span
                  className={`absolute inset-0 font-bebas text-3xl text-[#d8cfff] transition-opacity duration-[900ms] ease-out sm:text-4xl lg:text-5xl ${activeLayer === 'B' ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  {layerB}
                </span>
              </div>

              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#ff7b54] to-[#9b8cff]" />

              <div className="mt-10 flex flex-wrap gap-5 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                    <img src="Mongo.svg" className="w-12" alt="MongoDB" />
                  </div>
                  <span className="mt-2 font-bebas text-3xl text-white">M</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                    <img src="Express.svg" className="w-12" alt="Express" />
                  </div>
                  <span className="mt-2 font-bebas text-3xl text-white">E</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                    <img src="React.svg" className="w-12" alt="React" />
                  </div>
                  <span className="mt-2 font-bebas text-3xl text-white">R</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                    <img src="Node.svg" className="w-12" alt="Node" />
                  </div>
                  <span className="mt-2 font-bebas text-3xl text-white">N</span>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-1/2 h-[78vw] w-[78vw] max-h-[950px] max-w-[950px] -translate-y-1/2 translate-x-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,123,84,0.9),_rgba(46,11,93,0.95)_58%,_rgba(7,17,31,1)_100%)] shadow-[0_0_120px_rgba(0,0,0,0.32)]" />

            <picture className="absolute right-[-8%] top-[55%] z-10 w-[120vw] max-w-[590px] -translate-y-1/2 drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
              <source srcSet="/asim.webp" type="image/webp" />
              <img
                src="/asim.png"
                alt="Asim Khan"
                className="h-auto w-full"
                fetchPriority="high"
                decoding="async"
                width="590"
                height="720"
              />
            </picture>
          </section>

          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
        </div>
      )}
    </div>
  )
}

export default App