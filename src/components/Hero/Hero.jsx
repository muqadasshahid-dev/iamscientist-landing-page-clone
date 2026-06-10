import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import bg from '../../assets/hero/Hero-Banner-Bg.webp'
import title from '../../assets/hero/Title.png'
import kid from '../../assets/hero/Image-New.webp'

const slides = [
  {
    title,
    text:
      "I'm Scientist empowers kids to explore AI, Machine Learning and Deep Learning through contests and challenges.",
    stat: "5000+ Trusted Schools / Academies",
    img: kid,
  },
  {
    title,
    text:
      "Join competitions, build real skills and win awards while learning future technologies.",
    stat: "200+ Active Challenges",
    img: kid,
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 3000) // 🔥 FAST CHANGE
    return () => clearInterval(interval)
  }, [])

  const current = slides[index]

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          `linear-gradient(90deg, rgba(33,0,55,.92), rgba(52,0,76,.62)), url(${bg})`,
      }}
    >
      

      <div className="mx-auto flex h-screen max-h-[650px] max-w-[900px] items-center gap-3 px-3">

        {/* LEFT */}
        <div className="w-[52%]">

          <AnimatePresence mode="wait">

            {/* 🔥 SLIDE ANIMATION (LEFT → RIGHT like award section) */}
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: 'easeOut' }} // 🔥 FAST
            >

              <img src={current.title} className="mb-3 w-[380px]" />

              <p className="max-w-[500px] text-[15px] font-medium leading-[1.55] text-white">
                {current.text}
              </p>

              <div className="mt-5 flex items-center gap-8">

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }} // 🔥 FAST BUTTON
                  className="h-[52px] min-w-[200px] rounded-[12px] bg-[#cd05bc] px-5 text-[16px] font-bold text-white shadow-md"
                >
                  Explore Now
                </motion.button>

                <div className="leading-none">
                  <div className="text-[38px] font-black text-[#46baf5]">
                    5000+
                  </div>
                  <div className="text-[13px] font-bold text-white">
                    Trusted Schools<br />/ Academies
                  </div>
                </div>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* DOTS */}
          <div className="mt-5 flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-5 cursor-pointer rounded-full transition ${
                  i === index ? 'bg-[#46baf5]' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[48%] flex justify-end">

          <AnimatePresence mode="wait">

            <motion.img
              key={index}
              src={current.img}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: 'easeOut' }} // 🔥 FAST
              className="w-[460px]"
            />

          </AnimatePresence>

        </div>

      </div>
    </section>
  )
}   


