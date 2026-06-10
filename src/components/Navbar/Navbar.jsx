// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'
// import logo from '../../assets/logo.png'

// const links = ['Home', 'About', 'AI Contests', 'Courses', 'Teacher', 'Uni Plus', 'Summer Contest', 'Contact']

// export default function Navbar() {
//   const [open, setOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-40 bg-[#08296f] shadow-lg">
//       <nav className="mx-auto flex h-[88px] max-w-[1720px] items-center justify-between px-[5vw] max-xl:h-20 max-lg:h-20">
//         <img src={logo} alt="I am Scientist" className="h-[58px] w-[154px] object-contain max-lg:h-12 max-lg:w-32" />
//         <button className="hidden rounded-md border border-white/30 p-2 max-lg:block" onClick={() => setOpen(!open)} aria-label="Toggle menu">
//           {open ? <X /> : <Menu />}
//         </button>
//         <div className={`${open ? 'flex' : 'hidden'} absolute left-0 top-20 w-full flex-col gap-5 bg-[#08296f] px-6 py-6 lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-5 lg:bg-transparent lg:p-0`}>
//           {links.map((link, index) => (
//             <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className={`relative text-[19px] font-extrabold leading-none transition duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#df21f3] after:transition-all after:duration-300 hover:text-[#df21f3] hover:after:w-full max-2xl:text-base ${index === 0 ? 'text-[#7d57ff]' : 'text-white'}`}>
//               {link}
//             </a>
//           ))}
//           <a className="ml-4 rounded-[10px] border border-white bg-gradient-to-r from-[#3a9bff] to-[#df14df] px-7 py-4 text-[18px] font-extrabold shadow-[0_10px_24px_rgba(223,20,223,.22)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 max-xl:ml-0">Partner with Us</a>
//           <a className="rounded-[10px] border border-white bg-[#cb00b5] px-8 py-4 text-[18px] font-extrabold transition duration-300 hover:-translate-y-0.5 hover:brightness-110">Enroll</a>
//           <a className="rounded-[10px] border border-white bg-[#cb00b5] px-8 py-4 text-[18px] font-extrabold transition duration-300 hover:-translate-y-0.5 hover:brightness-110">Login</a>
//         </div>
//       </nav>
//     </header>
//   )
// }
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../../assets/logo.png'

const links = [
  'Home',
  'About',
  'Courses',
  'Contact',
]

const contestLinks = [
  'Teacher',
  'Uni Plus',
  'Summer Contest',
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#08296f] shadow-lg">
      <nav className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-4 xl:px-6">

        {/* Logo */}
        <img
          src={logo}
          alt="I am Scientist"
          className="h-[55px] w-auto object-contain"
        />

        {/* Mobile Button */}
        <button
          className="rounded-md border border-white/30 p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu */}
        <div
          className={`
            ${open ? 'flex' : 'hidden'}
            absolute left-0 top-[88px] w-full flex-col gap-4
            bg-[#08296f] px-6 py-6
            lg:static lg:flex lg:w-auto lg:flex-row
            lg:items-center lg:gap-3 lg:bg-transparent lg:p-0
          `}
        >
          {/* Home */}
          <a
            href="#home"
            className="text-[15px] font-bold text-[#7d57ff] transition hover:text-[#df21f3]"
          >
            Home
          </a>

          {/* About */}
          <a
            href="#about"
            className="text-[15px] font-bold text-white transition hover:text-[#df21f3]"
          >
            About
          </a>

          {/* AI Contests Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-[15px] font-bold text-white transition hover:text-[#df21f3]">
              AI Contests
              <ChevronDown size={16} />
            </button>

            <div className="lg:invisible lg:absolute lg:left-0 lg:top-full lg:mt-2 lg:w-52 lg:rounded-lg lg:bg-white lg:opacity-0 lg:shadow-xl lg:transition-all lg:duration-300 lg:group-hover:visible lg:group-hover:opacity-100">
              {contestLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-4 py-3 text-sm text-white lg:text-gray-800 lg:hover:bg-gray-100"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <a
            href="#courses"
            className="text-[15px] font-bold text-white transition hover:text-[#df21f3]"
          >
            Courses
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="text-[15px] font-bold text-white transition hover:text-[#df21f3]"
          >
            Contact
          </a>

          {/* Buttons */}
          <div className="mt-3 flex flex-col gap-2 lg:mt-0 lg:ml-4 lg:flex-row">

            <a
              href="#"
              className="rounded-[10px] border border-white bg-gradient-to-r from-[#3a9bff] to-[#df14df] px-4 py-2 text-center text-[14px] font-bold text-white shadow-[0_10px_24px_rgba(223,20,223,.22)] transition hover:brightness-110"
            >
              Partner with Us
            </a>

            <a
              href="#"
              className="rounded-[10px] border border-white bg-[#cb00b5] px-4 py-2 text-center text-[14px] font-bold text-white transition hover:brightness-110"
            >
              Enroll
            </a>

            <a
              href="#"
              className="rounded-[10px] border border-white bg-[#cb00b5] px-4 py-2 text-center text-[14px] font-bold text-white transition hover:brightness-110"
            >
              Login
            </a>

          </div>
        </div>
      </nav>
    </header>
  )
}