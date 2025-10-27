import { useEffect, useState } from 'react'
import './style.css'
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
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="font-bold text-2xl">
          <a href='/#home' className="link">
            !Nik
          </a>
        </div>
        <HeaderNav />
      </div>
    </header>
  )
}

export default Header