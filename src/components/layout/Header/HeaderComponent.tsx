import { useEffect, useState } from 'react'
import HeaderNav from './HeaderNav'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`w-full px-[4vh] h-[10vh] sticky top-0 z-[1000] transition-all duration-300 ease-in-out backdrop-blur-[0px] ${scrolled ? " bg-[var(--transparent-color)] backdrop-blur-[15px] shadow-md"  : ""}`}>
      <div className="h-full w-full flex justify-between items-center">
        <div className="font-bold text-2xl">
          <a href='/#home' className="link whitespace-nowrap">
            !Nik
          </a>
        </div>
        <HeaderNav />
      </div>
    </header>
  )
}

export default Header