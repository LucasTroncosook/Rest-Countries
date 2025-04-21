import { useState, useEffect } from "react"
import './header.css'
import moon from "../../assets/moon.svg"
import sun from "../../assets/sun.svg"

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = JSON.parse(localStorage.getItem('mode'))
    return savedMode !== null ? savedMode : false
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
    document.documentElement.classList.toggle("light", !darkMode)
  }, [darkMode])

  const handleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem("mode", JSON.stringify(newMode))
  }

  return (
    <header className={`header ${darkMode ? 'header-dark' : 'header-light'}`}>
        <div>  
            <h1>Where is the world?</h1>
            <nav className="header-nav">
                <button onClick={handleDarkMode}>
                  <img src={darkMode ? moon : sun} alt={darkMode ? 'moon' : 'sun'} />
                  <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
            </nav>
        </div>  
    </header>
  )
}

export default Header
