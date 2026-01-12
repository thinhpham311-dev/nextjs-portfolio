import Link from "next/link"
import { socialLinks } from "../constants/data"

const Socials = () => {
  return (
    <div className="social-list z-10 mx-auto w-[90%] md:w-[50%] lg:w-[40%] xl:mx-0 xl:w-[15%]">
      <ul className="flex justify-center gap-3 lg:justify-end">
        {socialLinks.map(({ href, icon, label }) => (
          <li key={label}>
            <Link
              href={href}
              className="flex h-10 w-10 items-center justify-center rounded-full border-[0.5px] border-white text-[18px] font-thin transition-all duration-500 hover:bg-white hover:text-black"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
