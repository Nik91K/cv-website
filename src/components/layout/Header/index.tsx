import { useEffect, useState } from 'react'
import './style.css'

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
          <a href="/" className="link">
            !Nik
          </a>
        </div>
        <nav className="header-links">
          <ul className="header-menu">
            <li>
              <a href="#" className="link">
                home
              </a>
            </li>
            <li>
              <a href="#" className="link">
                expertise
              </a>
            </li>
            <li>
              <a href="#" className="link">
                work
              </a>
            </li>
            <li>
              <a href="#" className="link">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header