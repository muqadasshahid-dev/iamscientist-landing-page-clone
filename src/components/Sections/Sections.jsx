// import { useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'
// import { ChevronLeft, ChevronRight, Clock3, PlayCircle, User, Plus } from 'lucide-react'
// import course1 from '../../assets/courses/image3.webp'
// import course2 from '../../assets/courses/image1.webp'
// import course3 from '../../assets/courses/image2.webp'
// import silver from '../../assets/medals/Silver-Medal.png'
// import gold from '../../assets/medals/Gold-Medal.png'
// import bronze from '../../assets/medals/Bronze-Medal.png'
// import c1 from '../../assets/carousel/img1.jpeg'
// import c2 from '../../assets/carousel/img2.jpeg'
// import c3 from '../../assets/carousel/img3.jpeg'
// import c4 from '../../assets/carousel/img4.jpeg'
// import c5 from '../../assets/carousel/img5.jpeg'
// import c6 from '../../assets/carousel/img6.jpeg'
// import c7 from '../../assets/carousel/img7.jpeg'
// import p1 from '../../assets/partners/Robx-Logo.webp'
// import p2 from '../../assets/partners/BISE_Rawalpindi_logo.webp'
// import p3 from '../../assets/partners/NITB.webp'
// import p4 from '../../assets/partners/J7Emporium.webp'
// import p5 from '../../assets/partners/nbf_logo.webp'
// import p6 from '../../assets/partners/VisionTech.webp'
// import p7 from '../../assets/partners/J7-Group.webp'
// import p8 from '../../assets/partners/image.png'
// import p9 from '../../assets/partners/moonlight.png'

// const schedule = [
//   { title: 'General', color: '#1c83ff', items: [['25', 'MAY', 'Contest Registration', '25 MAY 2026 - 18 JUN 2026'], ['01', 'APR', 'Course Registration', '01 APR 2026 - 30 MAY 2026'], ['20', 'JUL', 'Contest Results', '20 JUL 2026 - 20 JUL 2026']] },
//   { title: 'Contest', color: '#ff36db', items: [['25', 'MAY', 'Registration Dates', '25 MAY 2026 - 18 JUN 2026'], ['15', 'JUN', 'Registration Confirmation', '15 JUN 2026 - 20 JUN 2026'], ['22', 'JUN', 'Contest Dates', '22 JUN 2026 - 24 JUN 2026']] },
//   { title: 'Course', color: '#55f4ff', items: [['01', 'APR', 'Registration Dates', '01 APR 2026 - 30 MAY 2026'], ['25', 'MAY', 'Registration Confirmation', '25 MAY 2026 - 30 MAY 2026'], ['01', 'JUN', 'Course Starting Dates', '01 JUN 2026 - 30 AUG 2026']] },
// ]

// const courses = [
//   [course1, 'AI Basic Course', '4 Months', '55 Students', '67 Lessons'],
//   [course2, 'AI and Machine Learning', '3 Months', '35 Students', '53 Lessons'],
//   [course3, 'Advance Deep Learning', '2 Months', '45 Students', '64 Lessons'],
// ]
// const partners = [p1, p2, p3, p4, p5, p6, p7, p8, p9]
// const carousel = [c4, c2, c1, c3, c5, c6, c7]
// const faqs = [
//   ['Who can participate in the I am Scientist contests?', 'Students with a curiosity for AI, machine learning, robotics, and creative technology can participate through their school or academy.'],
//   ['What subjects do the contests cover?', 'The contests focus on artificial intelligence, machine learning, deep learning, problem solving, and practical technology challenges.'],
//   ['How are winners rewarded?', 'Winners receive medals, certificates, merit recognition, sponsored course access, and featured placement in the awards gallery.'],
//   ['Can schools participate as organizations?', 'Yes. Schools and academies can partner with I am Scientist to enroll groups of students and host contest activities.'],
//   ['How can I stay updated on contest dates?', 'Follow the announcements, subscribe to the newsletter, or contact the team for registration windows and schedule updates.'],
// ]

// function Heading({ eyebrow, children, dark = false }) {
//   return (
//     <div className="text-center">
//       {eyebrow && <p className="font-serif text-[28px] font-bold max-md:text-xl">{eyebrow}</p>}
//       <h2 className="font-serif text-[42px] font-bold leading-tight max-md:text-[32px]">{children}</h2>
//       <span className={`mx-auto mt-6 block h-[5px] w-[150px] rounded-full ${dark ? 'bg-white' : 'bg-gradient-to-r from-[#3798ff] to-[#e724dc]'}`} />
//     </div>
//   )
// }

// function ScheduleCard({ card }) {
//   return (
//     <motion.div
//       whileInView={{ opacity: 1, y: 0 }}
//       initial={{ opacity: 0, y: 32 }}
//       viewport={{ once: true, amount: 0.25 }}
//       whileHover={{ y: -6, scale: 1.01, boxShadow: '0 22px 55px rgba(0,0,0,.22)' }}
//       transition={{ duration: 0.4 }}
//       className="rounded-[16px] border-[3px] p-5"
//       style={{ borderColor: card.color }}
//     >
//       <h3 className="font-cursive text-[52px] font-black leading-none max-md:text-5xl" style={{ color: card.color }}>{card.title}</h3>
//       <div className="mb-6 mt-4 rounded-[10px] bg-white py-3 text-center text-[31px] font-black text-black max-md:text-2xl">ANNOUNCEMENTS</div>
//       <div className="space-y-6">
//         {card.items.map((item, i) => (
//           <div key={item[2]} className={`flex items-center gap-6 max-sm:gap-3 ${i === 1 ? 'flex-row-reverse text-right' : ''}`}>
//             <div className="min-w-[98px] rounded-l-[12px] border-l-4 border-r-4 border-t-4 py-2 text-center max-sm:min-w-[78px]" style={{ borderColor: card.color }}>
//               <b className="block text-[34px] max-sm:text-3xl">{item[0]}</b>
//               <span className="font-black">{item[1]}</span>
//             </div>
//             <div className="flex-1">
//               <p className="mb-2 text-[23px] font-black max-md:text-xl">{item[2]}</p>
//               <span className="inline-block border-b-[5px] border-white px-2 text-[21px] font-black text-black max-sm:text-base" style={{ backgroundColor: card.color }}>{item[3]}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="mt-8 h-[66px] w-full rounded-[9px] bg-white text-[28px] font-black text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8f4ff] max-sm:text-2xl">Enroll Now</button>
//     </motion.div>
//   )
// }

// function Prize({ img, name, text, outline }) {
//   return (
//     <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 28 }} viewport={{ once: true, amount: 0.3 }} whileHover={{ y: -7, scale: 1.015 }} transition={{ duration: 0.4 }} className="flex flex-col items-center">
//       <div className="flex items-center gap-7 max-sm:flex-col max-sm:gap-2">
//         <img src={img} alt={name} className="h-[200px] object-contain max-md:h-44" />
//         <h3 className="text-[40px] font-bold max-md:text-4xl">{name}</h3>
//       </div>
//       <div className={`mt-6 min-h-[118px] w-full rounded-[20px] px-7 py-7 text-[26px] font-bold leading-tight shadow-[0_16px_38px_rgba(0,0,0,.16)] transition duration-300 max-md:text-2xl ${outline ? 'border border-white bg-transparent' : 'bg-[#d10abd]'}`}>{text}</div>
//     </motion.div>
//   )
// }

// export default function Sections() {
//   const [activeSlide, setActiveSlide] = useState(2)
//   const [openFaq, setOpenFaq] = useState(null)
//   const visibleSlides = [-2, -1, 0, 1, 2].map((offset) => {
//     const index = (activeSlide + offset + carousel.length) % carousel.length
//     return { src: carousel[index], offset }
//   })
//   const moveSlide = (step) => setActiveSlide((activeSlide + step + carousel.length) % carousel.length)

//   return (
//     <>
//       <section id="ai-contests" className="bg-[#210038]">
//         <div className="grid grid-cols-[1fr_407px_1fr] bg-[#7021aa] text-center text-white max-lg:grid-cols-1">
//           <div className="py-20 text-[30px] max-md:px-6 max-md:py-12 max-md:text-2xl">Get ready to show your skills and creativity in our contest</div>
//           <div className="bg-gradient-to-r from-[#3896f5] to-[#e51de5] px-8 py-8">
//             <h3 className="text-[30px] font-black">Contest Starts In</h3>
//             <div className="mt-6 grid grid-cols-4 gap-4 text-[28px] font-black max-sm:text-xl">
//               {['12|Days', '1|Hours', '49|Minutes', '52|Seconds'].map((item) => {
//                 const [value, label] = item.split('|')
//                 return <span key={label}>{value}<small className="block text-[22px] font-semibold max-sm:text-sm">{label}</small></span>
//               })}
//             </div>
//           </div>
//         </div>
//         <div className="mx-auto max-w-[1540px] px-6 py-20">
//           <Heading eyebrow="Schedule">The National I am Scientist System</Heading>
//           <p className="mx-auto mt-5 max-w-[760px] text-center text-[34px] leading-tight max-md:text-2xl">Stay tuned for registration details and get ready to unlock your potential</p>
//           <div className="mt-16 grid grid-cols-3 gap-6 max-xl:grid-cols-1">{schedule.map((card) => <ScheduleCard key={card.title} card={card} />)}</div>
//         </div>
//       </section>

//       <section className="relative overflow-hidden bg-[#5b3890] px-6 py-16 text-center">
//         <div className="absolute left-[9%] top-10 h-[120px] w-[120px] rounded-full bg-[#418cf1] max-md:h-16 max-md:w-16" />
//         <div className="absolute -right-16 top-6 h-[84px] w-[300px] rounded-full bg-[#d006ba]" />
//         <h2 className="font-serif text-[56px] font-bold max-md:text-4xl">Test Your Limits and Rise to the Top</h2>
//         <p className="mx-auto mt-4 max-w-[1080px] text-[29px] leading-tight max-md:text-2xl">Start your journey with us and take part in our exciting competitions. Don't miss this chance to challenge yourself</p>
//         <button className="mt-10 rounded-[34px] bg-gradient-to-r from-[#3898f5] to-[#dc20de] px-9 py-4 text-[28px] font-black transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 max-md:text-2xl">Get started</button>
//       </section>

//       <section id="courses" className="bg-section px-6 py-20">
//         <Heading>Explore Our Courses</Heading>
//         <div className="mx-auto mt-16 grid max-w-[1510px] grid-cols-3 gap-5 max-lg:grid-cols-1">
//           {courses.map((course) => (
//             <motion.article whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 26 }} viewport={{ once: true, amount: 0.25 }} whileHover={{ y: -7, scale: 1.012, boxShadow: '0 24px 55px rgba(0,0,0,.28)' }} transition={{ duration: 0.42 }} className="overflow-hidden rounded-[14px] border-[3px] border-white bg-gradient-to-br from-[#2a0039] to-[#0d3195]" key={course[1]}>
//               <img src={course[0]} alt={course[1]} className="h-[300px] w-full object-cover transition duration-500 hover:scale-[1.025] max-sm:h-[230px]" />
//               <div className="p-6">
//                 <h3 className="text-[23px] font-black max-sm:text-xl">* {course[1]}</h3>
//                 <div className="my-8 flex flex-wrap gap-7 text-[17px] font-black max-sm:gap-4">
//                   <span><Clock3 className="inline" /> {course[2]}</span>
//                   <span><User className="inline" /> {course[3]}</span>
//                   <span><PlayCircle className="inline" /> {course[4]}</span>
//                 </div>
//                 <button className="mx-auto block rounded-[10px] bg-gradient-to-r from-[#399af5] to-[#de1ee1] px-8 py-4 text-[28px] font-black transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 max-sm:text-2xl">Register Now</button>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//         <button className="mx-auto mt-14 block rounded-[10px] bg-gradient-to-r from-[#399af5] to-[#de1ee1] px-8 py-4 text-[28px] font-black transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110">Explore More</button>
//       </section>

//       <section className="overflow-hidden bg-gradient-to-r from-[#210031] to-[#0b3aa0] px-6 py-20">
//         <h2 className="text-center font-serif text-[58px] font-bold max-md:text-4xl">Country Partners</h2>
//         <div className="partner-marquee mx-auto mt-12 flex max-w-[1350px] gap-6">
//           {[...partners, ...partners].map((p, index) => <div className="grid h-[126px] w-[116px] shrink-0 place-items-center rounded-[10px] bg-white p-3 shadow-[0_14px_34px_rgba(0,0,0,.16)] transition duration-300 hover:-translate-y-1" key={`${p}-${index}`}><img src={p} alt="Partner logo" className="max-h-full max-w-full object-contain" /></div>)}
//         </div>
//       </section>

//       <section className="bg-[#3a006e] px-6 py-20">
//         <Heading eyebrow="Latest Prizes" dark>Find Out the Latest Competition Prizes</Heading>
//         <div className="mx-auto mt-14 grid max-w-[1320px] grid-cols-3 items-end gap-10 text-center max-lg:grid-cols-1">
//           <Prize img={silver} name="Silver" text="Honored for excellent effort and creative skills" />
//           <Prize img={gold} name="Gold" text="Awarded for outstanding performance and remarkable innovation" outline />
//           <Prize img={bronze} name="Bronze" text="Honored for hard work and great progress" />
//         </div>
//       </section>

//       <section className="bg-[#090f2c] px-6 pb-28 pt-2">
//         <div className="mx-auto max-w-[1360px] rounded-[24px] bg-gradient-to-r from-[#3898f5] to-[#e31ee3] px-8 py-9 text-center">
//           <h2 className="font-serif text-[56px] font-bold max-md:text-4xl">Merit Awards</h2>
//           <p className="mx-auto mt-3 max-w-[1040px] text-[27px] font-black leading-snug max-md:text-xl">The top 20 students of the contest will receive a fully sponsored, one-month online crash course on AI, taught by industry expert</p>
//         </div>
//         <div className="relative mx-auto mt-20 flex max-w-[1700px] items-center justify-center gap-7 overflow-hidden">
//           <button onClick={() => moveSlide(-1)} aria-label="Previous winner" className="absolute left-3 z-10 grid h-16 w-16 place-items-center rounded-full bg-white text-black transition duration-300 hover:scale-105"><ChevronLeft size={36} /></button>
//           <AnimatePresence mode="popLayout">
//             {visibleSlides.map(({ src, offset }) => (
//               <motion.img
//                 layout
//                 key={`${src}-${offset}`}
//                 src={src}
//                 alt="Winner"
//                 initial={{ opacity: 0, scale: 0.92 }}
//                 animate={{ opacity: 1, scale: offset === 0 ? 1 : 0.94 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.45 }}
//                 className={`rounded-[10px] border-4 border-white object-cover ${offset === 0 ? 'z-10 h-[470px] w-[500px] max-md:h-[360px] max-md:w-full' : 'h-[365px] w-[390px] opacity-95 max-lg:hidden'}`}
//               />
//             ))}
//           </AnimatePresence>
//           <button onClick={() => moveSlide(1)} aria-label="Next winner" className="absolute right-3 z-10 grid h-16 w-16 place-items-center rounded-full bg-white text-black transition duration-300 hover:scale-105"><ChevronRight size={36} /></button>
//         </div>
//         <div className="mt-12 flex justify-center gap-3">{carousel.map((_, i) => <button aria-label={`Go to winner ${i + 1}`} onClick={() => setActiveSlide(i)} key={i} className={`h-3 w-3 rounded-full transition duration-300 ${activeSlide === i ? 'bg-white' : 'bg-white/50'}`} />)}</div>
//       </section>

//       <section className="bg-gradient-to-r from-[#200032] to-[#0b3ca1] px-6 py-20">
//         <Heading dark>Frequently Asked Questions</Heading>
//         <div className="mx-auto mt-10 max-w-[1200px] space-y-5">
//           {faqs.map(([q, a], index) => (
//             <div key={q} className="overflow-hidden rounded-[10px] border border-white">
//               <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-5 px-8 py-6 text-left text-[26px] font-black transition duration-300 hover:bg-white/10 max-md:text-xl">
//                 {q}
//                 <Plus className={`shrink-0 transition duration-300 ${openFaq === index ? 'rotate-45' : ''}`} />
//               </button>
//               <AnimatePresence>{openFaq === index && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="px-9 pb-7 text-[21px] leading-relaxed text-white/85 max-md:text-base">{a}</motion.p>}</AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Clock3, PlayCircle, User, Plus } from 'lucide-react'
import course1 from '../../assets/courses/image3.webp'
import course2 from '../../assets/courses/image1.webp'
import course3 from '../../assets/courses/image2.webp'
import silver from '../../assets/medals/Silver-Medal.png'
import gold from '../../assets/medals/Gold-Medal.png'
import bronze from '../../assets/medals/Bronze-Medal.png'
import c1 from '../../assets/carousel/img1.jpeg'
import c2 from '../../assets/carousel/img2.jpeg'
import c3 from '../../assets/carousel/img3.jpeg'
import c4 from '../../assets/carousel/img4.jpeg'
import c5 from '../../assets/carousel/img5.jpeg'
import c6 from '../../assets/carousel/img6.jpeg'
import c7 from '../../assets/carousel/img7.jpeg'
import p1 from '../../assets/partners/Robx-Logo.webp'
import p2 from '../../assets/partners/BISE_Rawalpindi_logo.webp'
import p3 from '../../assets/partners/NITB.webp'
import p4 from '../../assets/partners/J7Emporium.webp'
import p5 from '../../assets/partners/nbf_logo.webp'
import p6 from '../../assets/partners/VisionTech.webp'
import p7 from '../../assets/partners/J7-Group.webp'
import p8 from '../../assets/partners/image.png'
import p9 from '../../assets/partners/moonlight.png'

// ─── DATA ────────────────────────────────────────────────────────────────────

const schedule = [
  {
    title: 'General',
    color: '#1c83ff',
    items: [
      ['25', 'MAY', 'Contest Registration',      '25 MAY 2026 - 18 JUN 2026'],
      ['01', 'APR', 'Course Registration',        '01 APR 2026 - 30 MAY 2026'],
      ['20', 'JUL', 'Contest Results',            '20 JUL 2026 - 20 JUL 2026'],
    ],
  },
  {
    title: 'Contest',
    color: '#ff36db',
    items: [
      ['25', 'MAY', 'Registration Dates',         '25 MAY 2026 - 18 JUN 2026'],
      ['15', 'JUN', 'Registration Confirmation',  '15 JUN 2026 - 20 JUN 2026'],
      ['22', 'JUN', 'Contest Dates',              '22 JUN 2026 - 24 JUN 2026'],
    ],
  },
  {
    title: 'Course',
    color: '#55f4ff',
    items: [
      ['01', 'APR', 'Registration Dates',         '01 APR 2026 - 30 MAY 2026'],
      ['25', 'MAY', 'Registration Confirmation',  '25 MAY 2026 - 30 MAY 2026'],
      ['01', 'JUN', 'Course Starting Dates',      '01 JUN 2026 - 30 AUG 2026'],
    ],
  },
]

const courses = [
  [course1, 'AI Basic Course',          '4 Months', '55 Students', '67 Lessons'],
  [course2, 'AI and Machine Learning',  '3 Months', '35 Students', '53 Lessons'],
  [course3, 'Advance Deep Learning',    '2 Months', '45 Students', '64 Lessons'],
]

const partners = [p1, p2, p3, p4, p5, p6, p7, p8, p9]
const carousel  = [c4, c2, c1, c3, c5, c6, c7]

const faqs = [
  ['Who can participate in the I am Scientist contests?',  'Students with a curiosity for AI, machine learning, robotics, and creative technology can participate through their school or academy.'],
  ['What subjects do the contests cover?',                 'The contests focus on artificial intelligence, machine learning, deep learning, problem solving, and practical technology challenges.'],
  ['How are winners rewarded?',                           'Winners receive medals, certificates, merit recognition, sponsored course access, and featured placement in the awards gallery.'],
  ['Can schools participate as organizations?',           'Yes. Schools and academies can partner with I am Scientist to enroll groups of students and host contest activities.'],
  ['How can I stay updated on contest dates?',            'Follow the announcements, subscribe to the newsletter, or contact the team for registration windows and schedule updates.'],
]

// ─── COUNTDOWN ───────────────────────────────────────────────────────────────

function useCountdown(targetDate) {
  const calc = () => {
    const diff = new Date(targetDate) - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000)  / 60000),
      seconds: Math.floor((diff % 60000)    / 1000),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(t)
  }, [])
  return time
}

// ─── SHARED HEADING ──────────────────────────────────────────────────────────

function Heading({ eyebrow, children, dark = false }) {
  return (
    <div className="text-center">
      {eyebrow && (
        <p className="font-serif text-2xl font-bold md:text-3xl">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl lg:text-[42px]">
        {children}
      </h2>
      <span
        className={`mx-auto mt-4 block h-[4px] w-28 rounded-full ${
          dark ? 'bg-white' : 'bg-gradient-to-r from-[#3798ff] to-[#e724dc]'
        }`}
      />
    </div>
  )
}

// ─── SCHEDULE CARD ───────────────────────────────────────────────────────────

function ScheduleCard({ card }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 28 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5, scale: 1.01, boxShadow: '0 20px 50px rgba(0,0,0,.22)' }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border-[3px] p-4 md:p-5"
      style={{ borderColor: card.color }}
    >
      {/* Card title */}
      <h3
        className="font-cursive text-3xl font-black leading-none md:text-4xl"
        style={{ color: card.color }}
      >
        {card.title}
      </h3>

      {/* Announcements banner */}
      <div className="mb-5 mt-3 rounded-xl bg-white py-2 text-center text-lg font-black text-black md:text-xl">
        ANNOUNCEMENTS
      </div>

      {/* Items */}
      <div className="space-y-5">
        {card.items.map((item, i) => (
          <div
            key={item[2]}
            className={`flex items-center gap-4 ${
              i === 1 ? 'flex-row-reverse text-right' : ''
            }`}
          >
            {/* Date box */}
            <div
              className="min-w-[72px] rounded-l-xl border-l-4 border-r-4 border-t-4 py-2 text-center md:min-w-[80px]"
              style={{ borderColor: card.color }}
            >
              <b className="block text-2xl md:text-3xl">{item[0]}</b>
              <span className="text-sm font-black">{item[1]}</span>
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="mb-1.5 text-base font-black md:text-lg">{item[2]}</p>
              <span
                className="inline-block border-b-4 border-white px-2 py-0.5 text-sm font-black text-black md:text-base"
                style={{ backgroundColor: card.color }}
              >
                {item[3]}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Enroll button */}
      <button className="mt-6 h-11 w-full rounded-xl bg-white text-lg font-black text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8f4ff] md:h-12 md:text-xl">
        Enroll Now
      </button>
    </motion.div>
  )
}

// ─── PRIZE CARD ──────────────────────────────────────────────────────────────

function Prize({ img, name, text, outline }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center"
    >
      <div className="flex items-center gap-5 max-sm:flex-col max-sm:gap-2">
        <img
          src={img}
          alt={name}
          className="h-36 object-contain md:h-44 lg:h-48"
        />
        <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">{name}</h3>
      </div>
      <div
        className={`mt-5 min-h-[100px] w-full rounded-2xl px-5 py-5 text-base font-bold leading-snug shadow-lg transition duration-300 md:text-lg lg:text-xl ${
          outline ? 'border border-white bg-transparent' : 'bg-[#d10abd]'
        }`}
      >
        {text}
      </div>
    </motion.div>
  )
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export default function Sections() {
  const [activeSlide, setActiveSlide] = useState(2)
  const [openFaq,    setOpenFaq]    = useState(null)
  const time = useCountdown('2026-06-22T00:00:00')

  // Carousel helpers
  const visibleSlides = [-2, -1, 0, 1, 2].map((offset) => {
    const index = (activeSlide + offset + carousel.length) % carousel.length
    return { src: carousel[index], offset }
  })
  const moveSlide = (step) =>
    setActiveSlide((activeSlide + step + carousel.length) % carousel.length)

  return (
    <>
      {/* ══════════════════════════════════════════════
          1. COUNTDOWN + SCHEDULE
      ══════════════════════════════════════════════ */}
      <section id="ai-contests" className="bg-[#210038] text-white">

        {/* Countdown bar */}
        <div className="grid bg-[#7021aa] text-center lg:grid-cols-[1fr_380px_1fr]">
          <div className="px-4 py-8 text-base md:text-lg lg:py-12 lg:text-xl">
            Get ready to show your skills and creativity in our contest
          </div>

          <div className="bg-gradient-to-r from-[#3896f5] to-[#e51de5] px-6 py-6 lg:py-8">
            <h3 className="text-lg font-black md:text-xl">Contest Starts In</h3>
            <div className="mt-4 grid grid-cols-4 gap-2 text-xl font-black md:text-2xl lg:text-3xl">
              {[
                [time.days,    'Days'],
                [time.hours,   'Hours'],
                [time.minutes, 'Minutes'],
                [time.seconds, 'Seconds'],
              ].map(([val, label]) => (
                <span key={label} className="flex flex-col items-center">
                  {String(val).padStart(2, '0')}
                  <small className="mt-1 block text-xs font-semibold md:text-sm">{label}</small>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule section */}
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <Heading eyebrow="Schedule">The National I am Scientist System</Heading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-snug text-white/80 md:text-lg lg:text-xl">
            Stay tuned for registration details and get ready to unlock your potential
          </p>
          <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-3">
            {schedule.map((card) => (
              <ScheduleCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. TEST YOUR LIMITS CTA
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#5b3890] px-4 py-12 text-center text-white md:px-6 md:py-16">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute left-[8%] top-8 h-20 w-20 rounded-full bg-[#418cf1] opacity-70 blur-sm md:h-28 md:w-28" />
        <div className="pointer-events-none absolute -right-12 top-4 h-16 w-52 rounded-full bg-[#d006ba] opacity-80 md:h-20 md:w-64" />

        <div className="relative z-10">
          <h2 className="font-serif text-2xl font-bold md:text-3xl lg:text-4xl xl:text-[44px]">
            Test Your Limits and Rise to the Top
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-white/85 md:text-base lg:text-lg xl:text-xl">
            Start your journey with us and take part in our exciting competitions.
            Don't miss this chance to challenge yourself
          </p>
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 rounded-[34px] bg-gradient-to-r from-[#3898f5] to-[#dc20de] px-8 py-3 text-base font-black transition duration-300 hover:brightness-110 md:px-10 md:py-3.5 md:text-lg"
          >
            Get started
          </motion.button>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. COURSES
      ══════════════════════════════════════════════ */}
      <section id="courses" className="bg-[#1a0235] px-4 py-12 text-white md:px-6 md:py-16">
        <Heading>Explore Our Courses</Heading>

        <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:mt-12 lg:grid-cols-3">
          {courses.map((course) => (
            <motion.article
              key={course[1]}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, scale: 1.01, boxShadow: '0 22px 50px rgba(0,0,0,.28)' }}
              transition={{ duration: 0.42 }}
              className="overflow-hidden rounded-2xl border-2 border-white bg-gradient-to-br from-[#2a0039] to-[#0d3195]"
            >
              <img
                src={course[0]}
                alt={course[1]}
                className="h-52 w-full object-cover transition duration-500 hover:scale-[1.025] md:h-60 lg:h-56 xl:h-64"
              />
              <div className="p-5">
                <h3 className="text-base font-black md:text-lg">* {course[1]}</h3>
                <div className="my-4 flex flex-wrap gap-4 text-sm font-semibold text-white/80 md:text-base">
                  <span className="flex items-center gap-1.5">
                    <Clock3 size={16} /> {course[2]}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User size={16} /> {course[3]}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <PlayCircle size={16} /> {course[4]}
                  </span>
                </div>
                <button className="mx-auto block w-full rounded-xl bg-gradient-to-r from-[#399af5] to-[#de1ee1] px-6 py-2.5 text-sm font-black transition duration-300 hover:-translate-y-0.5 hover:brightness-110 md:py-3 md:text-base">
                  Register Now
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-xl bg-gradient-to-r from-[#399af5] to-[#de1ee1] px-8 py-2.5 text-sm font-black transition duration-300 hover:-translate-y-0.5 hover:brightness-110 md:py-3 md:text-base">
            Explore More
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. COUNTRY PARTNERS
      ══════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-gradient-to-r from-[#210031] to-[#0b3aa0] px-4 py-12 text-white md:px-6 md:py-16">
        <h2 className="text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl">
          Country Partners
        </h2>

        <div className="partner-marquee mx-auto mt-8 flex max-w-6xl gap-4 overflow-hidden md:gap-5">
          {[...partners, ...partners].map((p, index) => (
            <div
              key={`${p}-${index}`}
              className="grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-white p-2.5 shadow-lg transition duration-300 hover:-translate-y-1 md:h-24 md:w-24 lg:h-[100px] lg:w-[100px]"
            >
              <img
                src={p}
                alt="Partner logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. PRIZES
      ══════════════════════════════════════════════ */}
      <section className="bg-[#3a006e] px-4 py-12 text-white md:px-6 md:py-16">
        <Heading eyebrow="Latest Prizes" dark>
          Find Out the Latest Competition Prizes
        </Heading>
        <div className="mx-auto mt-10 grid max-w-5xl items-end gap-8 text-center md:mt-12 lg:grid-cols-3">
          <Prize img={silver} name="Silver" text="Honored for excellent effort and creative skills" />
          <Prize img={gold}   name="Gold"   text="Awarded for outstanding performance and remarkable innovation" outline />
          <Prize img={bronze} name="Bronze" text="Honored for hard work and great progress" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. MERIT AWARDS CAROUSEL
      ══════════════════════════════════════════════ */}
      <section className="bg-[#090f2c] px-4 pb-16 pt-2 text-white md:px-6 md:pb-20">
        {/* Banner */}
        <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-[#3898f5] to-[#e31ee3] px-6 py-7 text-center md:px-8 md:py-8">
          <h2 className="font-serif text-2xl font-bold md:text-3xl lg:text-4xl">
            Merit Awards
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-sm font-black leading-snug md:text-base lg:text-lg">
            The top 20 students of the contest will receive a fully sponsored,
            one-month online crash course on AI, taught by industry expert
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto mt-12 flex max-w-6xl items-center justify-center gap-4 overflow-hidden md:mt-16">
          <button
            onClick={() => moveSlide(-1)}
            aria-label="Previous winner"
            className="absolute left-2 z-10 grid h-12 w-12 place-items-center rounded-full bg-white text-black transition duration-300 hover:scale-105 md:h-14 md:w-14 md:left-3"
          >
            <ChevronLeft size={28} />
          </button>

          <AnimatePresence mode="popLayout">
            {visibleSlides.map(({ src, offset }) => (
              <motion.img
                layout
                key={`${src}-${offset}`}
                src={src}
                alt="Winner"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: offset === 0 ? 1 : 0.93 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45 }}
                className={`rounded-xl border-4 border-white object-cover transition-all ${
                  offset === 0
                    ? 'z-10 h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-[400px]'
                    : 'h-56 w-56 opacity-90 md:h-64 md:w-64 lg:h-72 lg:w-72 max-lg:hidden'
                }`}
              />
            ))}
          </AnimatePresence>

          <button
            onClick={() => moveSlide(1)}
            aria-label="Next winner"
            className="absolute right-2 z-10 grid h-12 w-12 place-items-center rounded-full bg-white text-black transition duration-300 hover:scale-105 md:h-14 md:w-14 md:right-3"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2.5">
          {carousel.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to winner ${i + 1}`}
              onClick={() => setActiveSlide(i)}
              className={`h-2.5 w-2.5 rounded-full transition duration-300 ${
                activeSlide === i ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. FAQ
      ══════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-[#200032] to-[#0b3ca1] px-4 py-12 text-white md:px-6 md:py-16">
        <Heading dark>Frequently Asked Questions</Heading>

        <div className="mx-auto mt-8 max-w-4xl space-y-4 md:mt-10">
          {faqs.map(([q, a], index) => (
            <div key={q} className="overflow-hidden rounded-xl border border-white/40">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-black transition duration-300 hover:bg-white/10 md:px-6 md:py-5 md:text-base lg:text-lg"
              >
                {q}
                <Plus
                  size={20}
                  className={`shrink-0 transition duration-300 ${
                    openFaq === index ? 'rotate-45' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32 }}
                    className="px-5 pb-5 text-sm leading-relaxed text-white/80 md:px-6 md:pb-6 md:text-base"
                  >
                    {a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
