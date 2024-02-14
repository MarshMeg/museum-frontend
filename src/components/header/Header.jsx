import logoDarkThem from "../../images/logo_dark_them.svg";
import {Link} from "react-router-dom";
import {useMediaQuery,} from "react-responsive";
import menuIcon from "./nav_menu/icon-menu.png";
import './header.css';

import language_map from "./titles_map.json"

export default function Header({ language }) {
  let titles_map = language_map[language]

  const isMobile = useMediaQuery({maxWidth: 540})
  let logo = logoDarkThem
  let nav_menu

  if (isMobile === true) {
    nav_menu = <button id="openNavMenu">
      <span>
        <img src={ menuIcon } alt="MENU" id="navMenuIcon"/>
      </span>
    </button>
  } else {
    nav_menu = <>
      <Link to={"/" + language + "/main"}>{titles_map.nav.main}</Link>
      <Link to={"/" + language + "/items"}>{titles_map.nav.items}</Link>
    </>
  }

  return (
    <header>
      <div className="header__logo">
        <img src={ logo } alt=""/>
        <p>Завьяловский школьный музей</p>
      </div>
      <nav className="header__navbar">
        {nav_menu}
      </nav>
    </header>
  )
}