import React from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useGlobalContext } from './context';


const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="theme-container">
      <button className="dark-toggle" onClick={toggleDarkTheme} >
        {isDarkTheme ? <BsFillSunFill className="toggle-icon"/> : <BsFillMoonStarsFill className='toggle-icon'/>}
      </button>
    </section>
  )
}

export default ThemeToggle