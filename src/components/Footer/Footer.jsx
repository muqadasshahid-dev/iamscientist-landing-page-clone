
import logo from '../../assets/logo.png'
import f1 from '../../assets/footer/container1.webp'
import f2 from '../../assets/footer/container2.webp'
import f3 from '../../assets/footer/container3.webp'
import f4 from '../../assets/footer/container4.webp'
import f5 from '../../assets/footer/container5.webp'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-r from-[#120021] via-[#0b2a6f] to-[#1a0040] text-white">

      {/* IMAGE STRIP */}
      <div className="grid grid-cols-5 gap-3 px-6 pt-8 max-md:grid-cols-2">
        {[f1, f2, f3, f4, f5].map((img) => (
          <div key={img} className="overflow-hidden rounded-xl">
            <img
              src={img}
              alt=""
              className="h-[200px] w-full object-cover transition duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* SUBSCRIBE */}
      <div className="relative mx-auto -mt-24 max-w-[1200px] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-14 flex items-center justify-between max-lg:flex-col max-lg:gap-8 max-lg:mt-10">

        <div>
          <h3 className="text-3xl font-extrabold max-md:text-2xl">
            Subscribe to our newsletter
          </h3>
          <p className="mt-3 text-lg text-white/70">
            Get updates about news, events & competitions
          </p>
        </div>

        <form className="flex w-full max-w-[450px] overflow-hidden rounded-xl border border-white/20 bg-white/10">
          <input
            placeholder="Your email address"
            className="flex-1 bg-transparent px-4 py-4 text-white outline-none placeholder:text-white/60"
          />
          <button className="bg-gradient-to-r from-[#3a98f8] to-[#d81ee6] px-6 font-bold hover:brightness-110 transition">
            Subscribe
          </button>
        </form>
      </div>

      {/* MAIN GRID */}
      <div className="mx-auto grid max-w-[1300px] grid-cols-[2fr_1fr_1fr_1.2fr] gap-12 px-6 py-16 max-lg:grid-cols-2 max-md:grid-cols-1">

        {/* LOGO SECTION */}
        <div>
          <img src={logo} alt="logo" className="h-24 w-52 object-contain mb-6" />
          <p className="text-white/80 leading-relaxed text-lg">
            We offer exciting contests, top courses and hands-on challenges.
            A platform where students learn, compete and grow together.
          </p>
        </div>

        <Column title="General" items={[
          'Courses',
          'Competitions',
          'Careers (UPCOMING)',
          'Affiliate Program'
        ]} />

        <Column title="Important Links" items={[
          'Terms & Conditions',
          'Privacy Policy',
          'Free Tools',
          'Verify Certificate'
        ]} />

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-bold mb-5">Contact</h3>

          <p className="text-white/80 leading-relaxed">
            167-169 Great Portland Street,<br />
            5th Floor, London, W1W 5PF
          </p>

          <p className="mt-5 text-white/80">+92 331 0001900</p>
          <p className="mt-3 text-pink-400">info@iamscientist.ai</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-[1300px] items-center justify-between px-6 py-6 max-sm:flex-col max-sm:gap-4">

          <p className="text-white/70 text-sm">
            © 2026 I am Scientist. All rights reserved.
          </p>

          <div className="flex gap-5 text-lg">

            <Icon><FaFacebookF /></Icon>
            <Icon><FaLinkedinIn /></Icon>
            <Icon><FaInstagram /></Icon>

          </div>
        </div>
      </div>

    </footer>
  )
}

/* COLUMN */
function Column({ title, items }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-5">{title}</h3>
      <ul className="space-y-3 text-white/80">
        {items.map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-white transition"
          >
            {item.includes('UPCOMING') ? (
              <>
                Careers{" "}
                <span className="ml-1 rounded-md bg-blue-500 px-2 py-1 text-xs">
                  UPCOMING
                </span>
              </>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ICON WRAPPER */
function Icon({ children }) {
  return (
    <div className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition">
      {children}
    </div>
  )
}