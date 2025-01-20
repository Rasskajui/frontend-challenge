import { NavLink } from 'react-router-dom';
import './Header.css';
import { ReactElement } from 'react';

function Header(): ReactElement {

  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink 
                to="/" 
                className={
                  ({isActive}) => `nav__btn ${isActive ? "nav__btn_active" : ""}`
                }
              >Все&nbsp;котики</NavLink>
            </li>
            <li className="nav__item">
              <NavLink 
                to="/favourites" 
                className={
                  ({isActive}) => `nav__btn ${isActive ? "nav__btn_active" : ""}`
                }
              >Любимые&nbsp;котики</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
