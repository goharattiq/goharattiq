import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [navbarToggle,setNavbarToggle] = useState(false);
  const handleNav=()=>{setNavbarToggle(!navbarToggle)}
  return (
    <header>
      <div className={`${navbarToggle?'menu-btn close':'menu-btn'}`} onClick={handleNav}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <nav className={`${navbarToggle?'menu show':'menu'}`}>
        <div className={`${navbarToggle?'menu-branding show':'menu-branding'}`}>
          <div className="portrait"></div>
        </div>
        <ul className={`${navbarToggle?'menu-nav show':'menu-nav'}`}>
          <li className={`${navbarToggle?'nav-item current show':'nav-item current'}`} onClick={handleNav}>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className={`${navbarToggle?'nav-item show':'nav-item'}`} onClick={handleNav}>
            <Link to="/about" className="nav-link">
              About Me
            </Link>
          </li>
          <li className={`${navbarToggle?'nav-item show':'nav-item'}`} onClick={handleNav}>
            <Link to="/work" className="nav-link">
              My Work
            </Link>
          </li>
          <li className={`${navbarToggle?'nav-item show':'nav-item'}`} onClick={handleNav}>
            <Link to="/contact" className="nav-link">
              How To Reach Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default Navbar
