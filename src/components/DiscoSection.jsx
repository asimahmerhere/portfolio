import { useEffect, useState } from 'react'

const discoFrames = ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12', '13', '14']

export function DiscoSection({ isClosing = false }) {
  const [activeFrame, setActiveFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((current) => (current + 1) % discoFrames.length)
    }, 120)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="disco-gallery"
      className={`relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#07111f] text-white transition-opacity duration-700 ease-in-out ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,123,84,0.14),_transparent_45%),radial-gradient(circle_at_center,_rgba(155,140,255,0.12),_transparent_60%)]" />
      <div className="relative mx-auto flex h-screen w-full max-w-7xl items-center justify-center px-2 md:px-4">
        <div className="relative h-[100vh] w-full max-w-[980px]">
          <img
            key={discoFrames[activeFrame]}
            src={`/animate-webp/${discoFrames[activeFrame]}.webp`}
            alt={`Disco animation ${discoFrames[activeFrame]}`}
            className="absolute inset-0 h-full w-full object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}